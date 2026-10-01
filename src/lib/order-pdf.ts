import pdfHeader from '@/assets/ags-pdf-header.jpg';
import type { Product } from './catalogue';

type PdfRow = {
  product: Product;
  quantity: number;
};

/* ============================================================
   PAGE
   ============================================================ */

const PAGE_W = 595.28;
const PAGE_H = 841.89;

/* ============================================================
   HEADER
   ============================================================ */

const HEADER_X = 42.52;
const HEADER_Y = 679.21;
const HEADER_W = 510.24;
const HEADER_H = 128.34;

/* ============================================================
   ORDER DETAILS
   ============================================================ */

const ORDER_TITLE_X = 48.19;
const ORDER_TITLE_Y = 635.67;
const CUSTOMER_X = 297.64;

/* ============================================================
   PRODUCT TABLE
   ============================================================ */

const TABLE_X = 48.19;
const TABLE_W = 498.90;

const TABLE_TOP = 548.36;
const TABLE_HEADER_H = 24;
const TABLE_ROW_H = 26;

const COL = [
  48.19,
  82.20,
  240.94,
  297.64,
  340.16,
  408.19,
  479.06,
  547.09,
];

const ROWS_PER_PAGE = 12;

/* ============================================================
   SUMMARY
   ============================================================ */

const SUMMARY_X = 48.19;
const SUMMARY_W = 498.90;
const SUMMARY_H = 68;

/* ============================================================
   NOTE
   ============================================================ */

const NOTE_X = 48.19;
const NOTE_W = 498.90;
const NOTE_H = 24;

/* ============================================================
   FOOTER
   ============================================================ */

const FOOTER_Y = 35;

/* ============================================================
   COLORS
   ============================================================ */

const BLACK = [0, 0, 0] as const;

const TITLE_COLOR = [
  17 / 255,
  24 / 255,
  39 / 255,
] as const;

const FOOTER_COLOR = [
  75 / 255,
  85 / 255,
  99 / 255,
] as const;



/* Pure black table borders */
const TABLE_BORDER = [
  0,
  0,
  0,
] as const;

const TABLE_GRID = [
  0,
  0,
  0,
] as const;

const SUMMARY_BORDER = [
  0,
  0,
  0,
] as const;



const NOTE_BORDER = [
  1,
  1,
  1,
] as const;

/* ============================================================
   GOOGLE SHEETS ORDER NUMBER
   ============================================================ */

/*
  Paste your Google Apps Script Web App URL here.

  Example:
  https://script.google.com/macros/s/XXXXXXXXXXXX/exec
*/
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzRwFj5D19hk1q-A4DFl6KR-QtqVLCku3G69WQrIbAF04EoHTqTZMJwx7B-JKRG2w4I/exec';

async function generateOrderNumber(
  customerName: string,
  mobile: string,
  address: string,
  rows: PdfRow[],
  totalAmount: number,
) {
  if (
    !GOOGLE_SCRIPT_URL ||
    GOOGLE_SCRIPT_URL.includes(
      'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE',
    )
  ) {
    throw new Error(
      'Google Apps Script URL is not configured. ' +
        'Please add your Web App URL in order-pdf.ts.',
    );
  }

  const items = rows
    .map(
      ({ product, quantity }) =>
        `${product.name ?? ''} x ${quantity}`,
    )
    .join(', ');

  const response = await fetch(
    GOOGLE_SCRIPT_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        customerName,
        mobile,
        address,
        items,
        amount: totalAmount,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to generate order number. Google Apps Script returned HTTP ${response.status}.`,
    );
  }

  const result = await response.json();

  if (!result?.success || !result?.orderNo) {
    throw new Error(
      'Google Apps Script did not return a valid order number.',
    );
  }

  return String(result.orderNo);
}

/* ============================================================
   TEXT HELPERS
   ============================================================ */

function money(value: number) {
  return `Rs. ${Math.round(
    value,
  ).toLocaleString('en-IN')}`;
}

function pdfText(value: string) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/₹/g, 'Rs.')
    .replace(/[^\x20-\x7E]/g, '');
}

function ascii(value: string) {
  return new TextEncoder().encode(
    value,
  );
}

function concatBytes(
  parts: Uint8Array[],
) {
  const total =
    parts.reduce(
      (sum, part) =>
        sum + part.length,
      0,
    );

  const output =
    new Uint8Array(total);

  let offset = 0;

  for (const part of parts) {
    output.set(
      part,
      offset,
    );

    offset += part.length;
  }

  return output;
}

/* ============================================================
   PDF GRAPHICS
   ============================================================ */

function fillColor(
  r: number,
  g: number,
  b: number,
) {
  return `${r.toFixed(
    6,
  )} ${g.toFixed(
    6,
  )} ${b.toFixed(
    6,
  )} rg\n`;
}

function strokeColor(
  r: number,
  g: number,
  b: number,
) {
  return `${r.toFixed(
    6,
  )} ${g.toFixed(
    6,
  )} ${b.toFixed(
    6,
  )} RG\n`;
}

function lineWidth(
  width: number,
) {
  return `${width.toFixed(
    3,
  )} w\n`;
}

function pdfLine(
  value: string,
  x: number,
  y: number,
  size: number,
  font = 'F1',
) {
  return (
    `BT /${font} ${size} Tf ` +
    `${x.toFixed(
      2,
    )} ${y.toFixed(
      2,
    )} Td ` +
    `(${pdfText(
      value,
    )}) Tj ET\n`
  );
}

function bold(
  value: string,
  x: number,
  y: number,
  size: number,
) {
  return pdfLine(
    value,
    x,
    y,
    size,
    'F2',
  );
}

function rectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  fill = false,
) {
  return (
    `${x.toFixed(
      2,
    )} ` +
    `${y.toFixed(
      2,
    )} ` +
    `${width.toFixed(
      2,
    )} ` +
    `${height.toFixed(
      2,
    )} re ` +
    `${fill ? 'f' : 'S'}\n`
  );
}

function horizontalLine(
  x1: number,
  y: number,
  x2: number,
) {
  return (
    `${x1.toFixed(
      2,
    )} ${y.toFixed(
      2,
    )} m ` +
    `${x2.toFixed(
      2,
    )} ${y.toFixed(
      2,
    )} l S\n`
  );
}

function verticalLine(
  x: number,
  y1: number,
  y2: number,
) {
  return (
    `${x.toFixed(
      2,
    )} ${y1.toFixed(
      2,
    )} m ` +
    `${x.toFixed(
      2,
    )} ${y2.toFixed(
      2,
    )} l S\n`
  );
}

/* ============================================================
   RIGHT ALIGNMENT
   ============================================================ */

function approxTextWidth(
  value: string,
  size: number,
) {
  let width = 0;

  for (const char of value) {
    if (char === ' ') {
      width += size * 0.28;
    } else if (
      char === 'i' ||
      char === 'l' ||
      char === '.'
    ) {
      width += size * 0.28;
    } else if (
      char === 'I' ||
      char === '1'
    ) {
      width += size * 0.32;
    } else if (
      char === 'W' ||
      char === 'M'
    ) {
      width += size * 0.82;
    } else {
      width += size * 0.55;
    }
  }

  return width;
}

function pdfLineRight(
  value: string,
  rightX: number,
  y: number,
  size: number,
  font = 'F1',
) {
  const width =
    approxTextWidth(
      value,
      size,
    );

  return pdfLine(
    value,
    rightX - width,
    y,
    size,
    font,
  );
}

/* ============================================================
   IMAGE HELPERS
   ============================================================ */

async function imageBytes(
  url: string,
) {
  const response =
    await fetch(url);

  if (!response.ok) {
    throw new Error(
      'Unable to load AGS PDF header image.',
    );
  }

  const blob =
    await response.blob();

  const buffer =
    await blob.arrayBuffer();

  const bytes =
    new Uint8Array(buffer);

  if (!bytes.length) {
    throw new Error(
      'AGS PDF header image is empty.',
    );
  }

  return bytes;
}

async function jpegDimensions(
  bytes: Uint8Array,
) {
  const blob =
    new Blob(
      [bytes],
      {
        type: 'image/jpeg',
      },
    );

  const url =
    URL.createObjectURL(
      blob,
    );

  try {
    const image =
      new Image();

    image.src = url;

    await image.decode();

    return {
      width:
        image.naturalWidth,
      height:
        image.naturalHeight,
    };
  } finally {
    URL.revokeObjectURL(
      url,
    );
  }
}

/* Create a light circular JPEG watermark for the PDF center. */
async function createWatermarkJpeg(
  url: string,
  opacity = 0.14,
) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      'Unable to load the Grandpa watermark image.',
    );
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);

  try {
    const image = new Image();
    image.src = objectUrl;
    await image.decode();

    const size = 1400;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error(
        'Unable to prepare the Grandpa watermark image.',
      );
    }

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, size, size);

    const radius = size * 0.44;
    const center = size / 2;

    context.save();
    context.beginPath();
    context.arc(
      center,
      center,
      radius,
      0,
      Math.PI * 2,
    );
    context.clip();

    const scale = Math.max(
      (radius * 2) / image.naturalWidth,
      (radius * 2) / image.naturalHeight,
    );

    const drawWidth =
      image.naturalWidth * scale;
    const drawHeight =
      image.naturalHeight * scale;

    const drawX =
      center - drawWidth / 2;
    const drawY =
      center - drawHeight / 2;

    context.globalAlpha = opacity;
    context.drawImage(
      image,
      drawX,
      drawY,
      drawWidth,
      drawHeight,
    );

    context.restore();

    context.globalAlpha = 0.10;
    context.strokeStyle = '#6b7280';
    context.lineWidth = 8;
    context.beginPath();
    context.arc(
      center,
      center,
      radius,
      0,
      Math.PI * 2,
    );
    context.stroke();

    const watermarkBlob =
      await new Promise<Blob | null>(
        (resolve) =>
          canvas.toBlob(
            resolve,
            'image/jpeg',
            0.90,
          ),
      );

    if (!watermarkBlob) {
      throw new Error(
        'Unable to create the Grandpa watermark image.',
      );
    }

    return new Uint8Array(
      await watermarkBlob.arrayBuffer(),
    );
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

/* Split the customer address into PDF-safe lines (no truncation). */
function wrapAddress(value: string, maxChars = 50): string[] {
  const words = value.trim().replace(/\s+/g, ' ').split(' ');
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    let rest = word;
    while (rest.length > maxChars) {
      if (line) { lines.push(line); line = ''; }
      lines.push(rest.slice(0, maxChars));
      rest = rest.slice(maxChars);
    }
    if (!rest) continue;
    if (line && (line.length + 1 + rest.length > maxChars)) {
      lines.push(line);
      line = rest;
    } else {
      line = line ? `${line} ${rest}` : rest;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/* ============================================================
   DOWNLOAD ORDER PDF
   ============================================================ */

export type PreparedOrderPdf = {
  blob: Blob;
  fileName: string;
  orderNo: string;
};

export async function prepareOrderPdf(
  args: {
    rows: PdfRow[];
    customerName: string;
    mobile: string;
    address: string;
  },
): Promise<PreparedOrderPdf> {
  if (!args.customerName.trim()) {
    throw new Error('Customer name is required.');
  }
  if (!/^[6-9]\d{9}$/.test(args.mobile.trim())) {
    throw new Error('A valid 10-digit mobile number is required.');
  }
  if (!args.address.trim()) {
    throw new Error('Customer address is required.');
  }
  if (!args.rows.length) {
    throw new Error(
      'Your cart is empty.',
    );
  }

  /* ==========================================================
     LOAD HEADER IMAGE
     ========================================================== */

  const header =
    await imageBytes(
      pdfHeader,
    );

  const headerSize =
    await jpegDimensions(
      header,
    );

  /* ==========================================================
     LOAD GRANDPA WATERMARK
     ========================================================== */

  const grandpaWatermark =
    await createWatermarkJpeg(
      '/images/grandpa-watermark.jpeg',
      0.14,
    );

  const grandpaWatermarkSize =
    await jpegDimensions(
      grandpaWatermark,
    );

  /* ==========================================================
     GENERATE GLOBAL ORDER NUMBER

     The order number is generated by Google Apps Script,
     so all customers/devices share the same sequence.

     AGSCRACKERS00001
     AGSCRACKERS00002
     AGSCRACKERS00003
     ========================================================== */

  /* ==========================================================
     DATE
     ========================================================== */

  const date =
    new Intl.DateTimeFormat(
      'en-IN',
      {
        dateStyle:
          'medium',
        timeStyle:
          'short',
      },
    ).format(
      new Date(),
    );

  /* ==========================================================
     CALCULATE TOTALS
     ========================================================== */

  const totals =
    args.rows.reduce(
      (
        acc,
        row,
      ) => {
        const mrp =
          Number(
            row.product.mrp ??
              row.product.price ??
              0,
          );

        const price =
          Number(
            row.product.price ??
              0,
          );

        acc.mrp +=
          mrp *
          row.quantity;

        acc.amount +=
          price *
          row.quantity;

        return acc;
      },
      {
        mrp: 0,
        amount: 0,
      },
    );

  const discount =
    Math.max(
      0,
      totals.mrp -
        totals.amount,
    );

  const orderNo =
    await generateOrderNumber(
      args.customerName.trim(),
      args.mobile.trim(),
      args.address.trim(),
      args.rows,
      totals.amount,
    );

  /* ==========================================================
     SPLIT PRODUCTS INTO PAGES
     ========================================================== */

  const chunks: PdfRow[][] =
    [];

  for (
    let i = 0;
    i < args.rows.length;
    i += ROWS_PER_PAGE
  ) {
    chunks.push(
      args.rows.slice(
        i,
        i +
          ROWS_PER_PAGE,
      ),
    );
  }

  const pages: string[] =
    [];

  /* ==========================================================
     CREATE PAGES
     ========================================================== */

  for (
    let pageIndex = 0;
    pageIndex <
    chunks.length;
    pageIndex++
  ) {
    const pageRows =
      chunks[pageIndex];

    const isLastPage =
      pageIndex ===
      chunks.length - 1;

    let c = '';

    /* ========================================================
       WHITE PAGE
       ======================================================== */

    c += fillColor(
      1,
      1,
      1,
    );

    /* ========================================================
       CENTER CIRCULAR GRANDPA WATERMARK
       ======================================================== */

    /* Large centered circular Grandpa watermark. */
    const watermarkSize = 400;
    const watermarkX =
      (PAGE_W - watermarkSize) / 2;
    const watermarkY =
      (PAGE_H - watermarkSize) / 2 - 10;

    c += `
q
${watermarkSize.toFixed(2)} 0 0 ${watermarkSize.toFixed(2)}
${watermarkX.toFixed(2)} ${watermarkY.toFixed(2)} cm
/Im2 Do
Q
`;

    /* ========================================================
       HEADER IMAGE
       ======================================================== */

    c += `
q
${HEADER_W.toFixed(
  2,
)} 0 0 ${HEADER_H.toFixed(
      2,
    )}
${HEADER_X.toFixed(
  2,
)} ${HEADER_Y.toFixed(
      2,
    )}
cm
/Im1 Do
Q
`;

    /* ========================================================
       ORDER ENQUIRY TITLE
       ======================================================== */

    c += fillColor(
      ...TITLE_COLOR,
    );

    c += bold(
      'ORDER ENQUIRY',
      ORDER_TITLE_X,
      ORDER_TITLE_Y,
      18,
    );

    /* ========================================================
       ORDER NUMBER
       ======================================================== */

    c += fillColor(
      ...BLACK,
    );

    c += pdfLine(
      'Order No:',
      48.19,
      622.48,
      8.2,
    );

    c += bold(
      orderNo,
      86.47,
      622.48,
      8.2,
    );

    /* ========================================================
       DATE
       ======================================================== */

    c += pdfLine(
      `Date: ${date}`,
      48.19,
      612.55,
      8.2,
    );

    /* ========================================================
       SHOP + CUSTOMER DETAILS
       ======================================================== */

    /* --------------------------------------------------------
       LEFT SIDE - SHOP DETAILS
       -------------------------------------------------------- */

    c += bold(
      'AGS CRACKERS',
      ORDER_TITLE_X,
      600.55,
      8.2,
    );

    c += pdfLine(
      'Sivakasi to Virudhunagar Main Road - 626005',
      ORDER_TITLE_X,
      588.55,
      8.2,
    );

    c += pdfLine(
      'Shop Mobile: 9840023543 / 9629131619',
      ORDER_TITLE_X,
      576.55,
      8.2,
    );

    /* --------------------------------------------------------
       RIGHT SIDE - CUSTOMER DETAILS
       -------------------------------------------------------- */

    c += bold(
      `Customer: ${args.customerName.trim()}`,
      CUSTOMER_X,
      648.48,
      8.2,
    );

    c += bold(
      `Customer Mobile: ${args.mobile.trim()}`,
      CUSTOMER_X,
      636.48,
      8.2,
    );

    const addressLines = wrapAddress(args.address);

    c += bold(
      'Address:',
      CUSTOMER_X,
      624.48,
      8.2,
    );

    addressLines.forEach((line, index) => {
      c += pdfLine(
        line,
        CUSTOMER_X,
        612.48 - index * 11,
        8.2,
      );
    });

    /* ========================================================
       TABLE CALCULATIONS
       ======================================================== */

    // Shift table down if the address needs more than four lines.
    const tableTop = TABLE_TOP - Math.max(0, addressLines.length - 4) * 11;
    const tableHeaderBottom =
      tableTop -
      TABLE_HEADER_H;

    const tableBottom =
      tableHeaderBottom -
      pageRows.length *
        TABLE_ROW_H;

    const tableHeight =
      TABLE_HEADER_H +
      pageRows.length *
        TABLE_ROW_H;

    /* ========================================================
       TABLE HEADER - TRANSPARENT
       ======================================================== */

    c += rectangle(
      TABLE_X,
      tableHeaderBottom,
      TABLE_W,
      TABLE_HEADER_H,
      false,
    );

    /* ========================================================
       OUTER TABLE BORDER
       ======================================================== */

    c += strokeColor(
      ...TABLE_BORDER,
    );

    c += lineWidth(
      1.25,
    );

    c += rectangle(
      TABLE_X,
      tableBottom,
      TABLE_W,
      tableHeight,
      false,
    );

    /* ========================================================
       INNER GRID
       ======================================================== */

    c += strokeColor(
      ...TABLE_GRID,
    );

    c += lineWidth(
      0.65,
    );

    for (
      let i = 1;
      i <
      COL.length - 1;
      i++
    ) {
      c += verticalLine(
        COL[i],
        tableTop,
        tableBottom,
      );
    }

    c += horizontalLine(
      TABLE_X,
      tableHeaderBottom,
      TABLE_X +
        TABLE_W,
    );

    for (
      let i = 1;
      i <= pageRows.length;
      i++
    ) {
      c += horizontalLine(
        TABLE_X,
        tableHeaderBottom -
          i *
            TABLE_ROW_H,
        TABLE_X +
          TABLE_W,
      );
    }

    /* ========================================================
       TOP BORDER - EXTRA BLACK
       ======================================================== */

    c += strokeColor(
      ...BLACK,
    );

    c += lineWidth(
      1.25,
    );

    c += horizontalLine(
      TABLE_X,
      tableTop,
      TABLE_X +
        TABLE_W,
    );

    /* ========================================================
       TABLE HEADER TEXT
       ======================================================== */

    c += fillColor(
      ...BLACK,
    );

    const headerTextY =
      tableTop -
      16;

    c += bold(
      'S.No',
      55.86,
      headerTextY,
      8.2,
    );

    c += bold(
      'Product',
      87.20,
      headerTextY,
      8.2,
    );

    c += bold(
      'Unit',
      261.32,
      headerTextY,
      8.2,
    );

    c += bold(
      'Qty',
      312.06,
      headerTextY,
      8.2,
    );

    c += bold(
      'MRP',
      384.97,
      headerTextY,
      8.2,
    );

    c += bold(
      'Discount',
      438.98,
      headerTextY,
      8.2,
    );

    c += bold(
      'Amount',
      511.12,
      headerTextY,
      8.2,
    );

    /* ========================================================
       PRODUCT ROWS
       ======================================================== */

    pageRows.forEach(
      (
        {
          product,
          quantity,
        },
        index,
      ) => {
        const rowTop =
          tableHeaderBottom -
          index *
            TABLE_ROW_H;

        const rowBaseline =
          rowTop -
          17;

        const mrp =
          Number(
            product.mrp ??
              product.price ??
              0,
          ) *
          quantity;

        const amount =
          Number(
            product.price ??
              0,
          ) *
          quantity;

        const itemDiscount =
          Math.max(
            0,
            mrp -
              amount,
          );

        /* S.No */

        c += pdfLine(
          String(
            pageIndex *
              ROWS_PER_PAGE +
              index +
              1,
          ),
          62.42,
          rowBaseline,
          8.2,
        );

        /* Product */

        let productName =
          String(
            product.name ??
              '',
          );

        if (
          productName.length >
          31
        ) {
          productName =
            productName.slice(
              0,
              28,
            ) +
            '...';
        }

        c += pdfLine(
          productName,
          87.20,
          rowBaseline,
          8.2,
        );

        /* Unit */

        c += pdfLine(
          String(
            product.unit ??
              '-',
          ),
          257.90,
          rowBaseline,
          8.2,
        );

        /* Qty */

        c += pdfLine(
          String(quantity),
          316.12,
          rowBaseline,
          8.2,
        );

        /* MRP */

        c += pdfLineRight(
          money(mrp),
          403.00,
          rowBaseline,
          8.2,
          'F1',
        );

        /* Discount */

        c += pdfLineRight(
          money(
            itemDiscount,
          ),
          474.00,
          rowBaseline,
          8.2,
          'F1',
        );

        /* Amount */

        c += pdfLineRight(
          money(amount),
          540.00,
          rowBaseline,
          8.2,
          'F2',
        );
      },
    );

    /* ========================================================
       FINAL PAGE SUMMARY
       ======================================================== */

    if (isLastPage) {
      const summaryTop =
        tableBottom -
        25;

      const summaryBottom =
        summaryTop -
        SUMMARY_H;

      /* Summary header - transparent */

      c += rectangle(
        SUMMARY_X,
        summaryTop -
          24,
        SUMMARY_W,
        24,
        false,
      );

      /* Summary outer border */

      c += strokeColor(
        ...SUMMARY_BORDER,
      );

      c += lineWidth(
        1.0,
      );

      c += rectangle(
        SUMMARY_X,
        summaryBottom,
        SUMMARY_W,
        SUMMARY_H,
        false,
      );

      /* Summary grid */

      c += strokeColor(
        ...BLACK,
      );

      c += lineWidth(
        0.65,
      );

      c += horizontalLine(
        SUMMARY_X,
        summaryTop -
          24,
        SUMMARY_X +
          SUMMARY_W,
      );

      c += horizontalLine(
        SUMMARY_X,
        summaryTop -
          46,
        SUMMARY_X +
          SUMMARY_W,
      );

      c += verticalLine(
        204.09,
        summaryTop,
        summaryBottom,
      );

      c += verticalLine(
        360.00,
        summaryTop,
        summaryBottom,
      );

      /* Summary top border */

      c += strokeColor(
        ...BLACK,
      );

      c += lineWidth(
        1.0,
      );

      c += horizontalLine(
        SUMMARY_X,
        summaryTop,
        SUMMARY_X +
          SUMMARY_W,
      );

      /* Summary heading */

      c += fillColor(
        ...BLACK,
      );

      c += bold(
        'ORDER SUMMARY',
        55.19,
        summaryTop -
          16,
        8.2,
      );

      c += bold(
        'PAYABLE AMOUNT',
        462.65,
        summaryTop -
          16,
        8.2,
      );

      /* Total MRP */

      c += pdfLine(
        'Total MRP',
        55.19,
        summaryTop -
          38,
        8.2,
      );

      c += pdfLineRight(
        money(
          totals.mrp,
        ),
        350,
        summaryTop -
          38,
        8.2,
        'F1',
      );

      /* Total Discount */

      c += pdfLine(
        'Total Discount',
        55.19,
        summaryTop -
          60,
        8.2,
      );

      c += pdfLineRight(
        money(
          discount,
        ),
        350,
        summaryTop -
          60,
        8.2,
        'F1',
      );

      /* Payable amount */

      c += pdfLineRight(
        money(
          totals.amount,
        ),
        540,
        summaryTop -
          45,
        13,
        'F2',
      );

      /* ======================================================
         NOTE
         ====================================================== */

      const noteTop =
        summaryBottom -
        20;

      const noteY =
        noteTop -
        NOTE_H;

      c += strokeColor(
        ...NOTE_BORDER,
      );

      c += lineWidth(
        0.5,
      );

      /* Note background - transparent */

      c += rectangle(
        NOTE_X,
        noteY,
        NOTE_W,
        NOTE_H,
        false,
      );

      c += fillColor(
        ...BLACK,
      );

      c += bold(
        'Note:',
        56.19,
        noteTop -
          16,
        8.2,
      );

      c += pdfLine(
        'Discounted price shown in the catalogue. Final availability is confirmed by AGS CRACKERS.',
        77.14,
        noteTop -
          16,
        8.2,
      );
    }

    /* ========================================================
       FOOTER
       ======================================================== */

    c += fillColor(
      ...FOOTER_COLOR,
    );

    c += pdfLine(
      'AGS CRACKERS - Safe & Joyful Celebrations',
      213.10,
      FOOTER_Y,
      8.2,
    );

    if (
      chunks.length > 1
    ) {
      c += pdfLine(
        `Page ${
          pageIndex + 1
        } of ${
          chunks.length
        }`,
        500,
        FOOTER_Y,
        7,
      );
    }

    pages.push(c);
  }

  /* ==========================================================
     PDF OBJECTS
     ========================================================== */

  const objectMap =
    new Map<
      number,
      Uint8Array
    >();

  const pageCount =
    pages.length;

  const fontRegular =
    3 +
    pageCount * 2;

  const fontBold =
    fontRegular + 1;

  const imageObject =
    fontBold + 1;

  const watermarkObject =
    imageObject + 1;

  const objectCount =
    watermarkObject;

  /* ==========================================================
     PDF HEADER
     ========================================================== */

  const pdfHeaderBytes =
    ascii(
      '%PDF-1.4\n%\xFF\xFF\xFF\xFF\n',
    );

  /* Catalog */

  objectMap.set(
    1,
    ascii(
      '1 0 obj\n' +
        '<< /Type /Catalog /Pages 2 0 R >>\n' +
        'endobj\n',
    ),
  );

  /* Pages */

  const kids =
    Array.from(
      {
        length:
          pageCount,
      },
      (_, index) =>
        `${3 + index * 2} 0 R`,
    ).join(' ');

  objectMap.set(
    2,
    ascii(
      `2 0 obj\n` +
        `<< /Type /Pages ` +
        `/Kids [${kids}] ` +
        `/Count ${pageCount} >>\n` +
        `endobj\n`,
    ),
  );

  /* Page objects */

  pages.forEach(
    (
      content,
      index,
    ) => {
      const pageObject =
        3 +
        index * 2;

      const contentObject =
        pageObject + 1;

      objectMap.set(
        pageObject,
        ascii(
          `${pageObject} 0 obj\n` +
            `<< /Type /Page ` +
            `/Parent 2 0 R ` +
            `/MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
            `/Resources << ` +
            `/ProcSet [/PDF /Text /ImageC] ` +
            `/Font << ` +
            `/F1 ${fontRegular} 0 R ` +
            `/F2 ${fontBold} 0 R ` +
            `>> ` +
            `/XObject << ` +
            `/Im1 ${imageObject} 0 R ` +
            `/Im2 ${watermarkObject} 0 R ` +
            `>> ` +
            `>> ` +
            `/Contents ${contentObject} 0 R >>\n` +
            `endobj\n`,
        ),
      );

      const contentBytes =
        ascii(content);

      objectMap.set(
        contentObject,
        concatBytes([
          ascii(
            `${contentObject} 0 obj\n` +
              `<< /Length ${contentBytes.length} >>\n` +
              `stream\n`,
          ),
          contentBytes,
          ascii(
            `endstream\nendobj\n`,
          ),
        ]),
      );
    },
  );

  /* Regular font */

  objectMap.set(
    fontRegular,
    ascii(
      `${fontRegular} 0 obj\n` +
        `<< /Type /Font ` +
        `/Subtype /Type1 ` +
        `/BaseFont /Helvetica >>\n` +
        `endobj\n`,
    ),
  );

  /* Bold font */

  objectMap.set(
    fontBold,
    ascii(
      `${fontBold} 0 obj\n` +
        `<< /Type /Font ` +
        `/Subtype /Type1 ` +
        `/BaseFont /Helvetica-Bold >>\n` +
        `endobj\n`,
    ),
  );

  /* Header image */

  objectMap.set(
    imageObject,
    concatBytes([
      ascii(
        `${imageObject} 0 obj\n` +
          `<< /Type /XObject ` +
          `/Subtype /Image ` +
          `/Width ${headerSize.width} ` +
          `/Height ${headerSize.height} ` +
          `/ColorSpace /DeviceRGB ` +
          `/BitsPerComponent 8 ` +
          `/Filter /DCTDecode ` +
          `/Length ${header.length} >>\n` +
          `stream\n`,
      ),
      header,
      ascii(
        `\nendstream\nendobj\n`,
      ),
    ]),
  );

  /* Grandpa watermark image */

  objectMap.set(
    watermarkObject,
    concatBytes([
      ascii(
        `${watermarkObject} 0 obj\n` +
          `<< /Type /XObject ` +
          `/Subtype /Image ` +
          `/Width ${grandpaWatermarkSize.width} ` +
          `/Height ${grandpaWatermarkSize.height} ` +
          `/ColorSpace /DeviceRGB ` +
          `/BitsPerComponent 8 ` +
          `/Filter /DCTDecode ` +
          `/Length ${grandpaWatermark.length} >>\n` +
          `stream\n`,
      ),
      grandpaWatermark,
      ascii(
        `\nendstream\nendobj\n`,
      ),
    ]),
  );

  /* ==========================================================
     BUILD PDF
     ========================================================== */

  const body: Uint8Array[] = [
    pdfHeaderBytes,
  ];

  const offsets: number[] =
    [];

  let offset =
    pdfHeaderBytes.length;

  for (
    let id = 1;
    id <= objectCount;
    id++
  ) {
    const object =
      objectMap.get(id);

    if (!object) {
      throw new Error(
        `Missing PDF object ${id}`,
      );
    }

    offsets[id] =
      offset;

    body.push(
      object,
    );

    offset +=
      object.length;
  }

  /* ==========================================================
     XREF
     ========================================================== */

  const xrefOffset =
    offset;

  let xref =
    `xref\n` +
    `0 ${
      objectCount + 1
    }\n` +
    `0000000000 65535 f \n`;

  for (
    let id = 1;
    id <= objectCount;
    id++
  ) {
    xref +=
      `${String(
        offsets[id],
      ).padStart(
        10,
        '0',
      )} 00000 n \n`;
  }

  xref +=
    `trailer\n` +
    `<< /Size ${
      objectCount + 1
    } /Root 1 0 R >>\n` +
    `startxref\n` +
    `${xrefOffset}\n` +
    `%%EOF`;

  body.push(
    ascii(xref),
  );

  /* ==========================================================
     CREATE PDF
     ========================================================== */

  const finalBytes =
    concatBytes(body);

  const blob =
    new Blob(
      [finalBytes],
      {
        type: 'application/pdf',
      },
    );

  return {
    blob,
    fileName: `${orderNo}-AGS-CRACKERS-Order.pdf`,
    orderNo,
  };
}

/* ============================================================
   DOWNLOAD PREPARED PDF
   ============================================================ */

export function downloadPreparedOrderPdf(
  prepared: PreparedOrderPdf,
) {
  const url =
    URL.createObjectURL(prepared.blob);

  const anchor =
    document.createElement('a');

  anchor.href = url;
  anchor.download = prepared.fileName;

  document.body.appendChild(anchor);
  anchor.click();

  window.dispatchEvent(
    new CustomEvent('ags-order-pdf-downloaded', {
      detail: {
        orderNo: prepared.orderNo,
      },
    }),
  );

  anchor.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1500);
}

/* ============================================================
   SHARE PREPARED PDF
   ============================================================ */

export async function sharePreparedOrderPdf(
  prepared: PreparedOrderPdf,
) {
  if (
    typeof navigator === 'undefined' ||
    typeof navigator.share !== 'function'
  ) {
    throw new Error(
      'PDF sharing is not supported in this browser. Please use Download Order PDF.',
    );
  }

  const file = new File(
    [prepared.blob],
    prepared.fileName,
    {
      type: 'application/pdf',
    },
  );

  if (
    typeof navigator.canShare === 'function' &&
    !navigator.canShare({ files: [file] })
  ) {
    throw new Error(
      'This browser cannot share PDF files. Please use Download Order PDF.',
    );
  }

  await navigator.share({
    title: `${prepared.orderNo} - AGS CRACKERS`,
    text: `AGS CRACKERS Order ${prepared.orderNo}`,
    files: [file],
  });
}

/* ============================================================
   DOWNLOAD ORDER PDF
   Backward-compatible wrapper for existing callers.
   ============================================================ */

export async function downloadOrderPdf(
  args: {
    rows: PdfRow[];
    customerName: string;
    mobile: string;
    address: string;
  },
) {
  const prepared =
    await prepareOrderPdf(args);

  downloadPreparedOrderPdf(prepared);

  return prepared;
}