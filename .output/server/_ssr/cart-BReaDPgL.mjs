import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as useCart, l as priceText, p as whatsapp, t as Button } from "./button-DrpbDoM0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Share2, m as MessageCircle, p as Minus, r as Trash2, s as ShoppingBag, u as Plus, w as ArrowRight, y as Download } from "../_libs/lucide-react.mjs";
import { i as PageIntro } from "./site-CRzEUwD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-BReaDPgL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ags_pdf_header_default = "/assets/ags-pdf-header-D2FBIeZL.jpg";
var PAGE_W = 595.28;
var PAGE_H = 841.89;
var HEADER_X = 42.52;
var HEADER_Y = 679.21;
var HEADER_W = 510.24;
var HEADER_H = 128.34;
var ORDER_TITLE_X = 48.19;
var ORDER_TITLE_Y = 635.67;
var CUSTOMER_X = 297.64;
var TABLE_X = 48.19;
var TABLE_W = 498.9;
var TABLE_TOP = 548.36;
var TABLE_HEADER_H = 24;
var TABLE_ROW_H = 26;
var COL = [
	48.19,
	82.2,
	240.94,
	297.64,
	340.16,
	408.19,
	479.06,
	547.09
];
var ROWS_PER_PAGE = 12;
var SUMMARY_X = 48.19;
var SUMMARY_W = 498.9;
var SUMMARY_H = 68;
var NOTE_X = 48.19;
var NOTE_W = 498.9;
var NOTE_H = 24;
var FOOTER_Y = 35;
var BLACK = [
	0,
	0,
	0
];
var TITLE_COLOR = [
	17 / 255,
	24 / 255,
	39 / 255
];
var FOOTER_COLOR = [
	75 / 255,
	85 / 255,
	99 / 255
];
var TABLE_BORDER = [
	0,
	0,
	0
];
var TABLE_GRID = [
	0,
	0,
	0
];
var SUMMARY_BORDER = [
	0,
	0,
	0
];
var NOTE_BORDER = [
	1,
	1,
	1
];
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzRwFj5D19hk1q-A4DFl6KR-QtqVLCku3G69WQrIbAF04EoHTqTZMJwx7B-JKRG2w4I/exec";
async function generateOrderNumber(customerName, mobile, address, rows, totalAmount) {
	if (GOOGLE_SCRIPT_URL.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) throw new Error("Google Apps Script URL is not configured. Please add your Web App URL in order-pdf.ts.");
	const items = rows.map(({ product, quantity }) => `${product.name ?? ""} x ${quantity}`).join(", ");
	const response = await fetch(GOOGLE_SCRIPT_URL, {
		method: "POST",
		body: JSON.stringify({
			customerName,
			mobile,
			address,
			items,
			amount: totalAmount
		})
	});
	if (!response.ok) throw new Error(`Unable to generate order number. Google Apps Script returned HTTP ${response.status}.`);
	const result = await response.json();
	if (!result?.success || !result?.orderNo) throw new Error("Google Apps Script did not return a valid order number.");
	return String(result.orderNo);
}
function money(value) {
	return `Rs. ${Math.round(value).toLocaleString("en-IN")}`;
}
function pdfText(value) {
	return String(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/₹/g, "Rs.").replace(/[^\x20-\x7E]/g, "");
}
function ascii(value) {
	return new TextEncoder().encode(value);
}
function concatBytes(parts) {
	const total = parts.reduce((sum, part) => sum + part.length, 0);
	const output = new Uint8Array(total);
	let offset = 0;
	for (const part of parts) {
		output.set(part, offset);
		offset += part.length;
	}
	return output;
}
function fillColor(r, g, b) {
	return `${r.toFixed(6)} ${g.toFixed(6)} ${b.toFixed(6)} rg\n`;
}
function strokeColor(r, g, b) {
	return `${r.toFixed(6)} ${g.toFixed(6)} ${b.toFixed(6)} RG\n`;
}
function lineWidth(width) {
	return `${width.toFixed(3)} w\n`;
}
function pdfLine(value, x, y, size, font = "F1") {
	return `BT /${font} ${size} Tf ${x.toFixed(2)} ${y.toFixed(2)} Td (${pdfText(value)}) Tj ET\n`;
}
function bold(value, x, y, size) {
	return pdfLine(value, x, y, size, "F2");
}
function rectangle(x, y, width, height, fill = false) {
	return `${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re ${fill ? "f" : "S"}\n`;
}
function horizontalLine(x1, y, x2) {
	return `${x1.toFixed(2)} ${y.toFixed(2)} m ${x2.toFixed(2)} ${y.toFixed(2)} l S\n`;
}
function verticalLine(x, y1, y2) {
	return `${x.toFixed(2)} ${y1.toFixed(2)} m ${x.toFixed(2)} ${y2.toFixed(2)} l S\n`;
}
function approxTextWidth(value, size) {
	let width = 0;
	for (const char of value) if (char === " ") width += size * .28;
	else if (char === "i" || char === "l" || char === ".") width += size * .28;
	else if (char === "I" || char === "1") width += size * .32;
	else if (char === "W" || char === "M") width += size * .82;
	else width += size * .55;
	return width;
}
function pdfLineRight(value, rightX, y, size, font = "F1") {
	return pdfLine(value, rightX - approxTextWidth(value, size), y, size, font);
}
async function imageBytes(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error("Unable to load AGS PDF header image.");
	const buffer = await (await response.blob()).arrayBuffer();
	const bytes = new Uint8Array(buffer);
	if (!bytes.length) throw new Error("AGS PDF header image is empty.");
	return bytes;
}
async function jpegDimensions(bytes) {
	const blob = new Blob([bytes], { type: "image/jpeg" });
	const url = URL.createObjectURL(blob);
	try {
		const image = new Image();
		image.src = url;
		await image.decode();
		return {
			width: image.naturalWidth,
			height: image.naturalHeight
		};
	} finally {
		URL.revokeObjectURL(url);
	}
}
async function createWatermarkJpeg(url, opacity = .14) {
	const response = await fetch(url);
	if (!response.ok) throw new Error("Unable to load the Grandpa watermark image.");
	const blob = await response.blob();
	const objectUrl = URL.createObjectURL(blob);
	try {
		const image = new Image();
		image.src = objectUrl;
		await image.decode();
		const size = 1400;
		const canvas = document.createElement("canvas");
		canvas.width = size;
		canvas.height = size;
		const context = canvas.getContext("2d");
		if (!context) throw new Error("Unable to prepare the Grandpa watermark image.");
		context.fillStyle = "#ffffff";
		context.fillRect(0, 0, size, size);
		const radius = size * .44;
		const center = size / 2;
		context.save();
		context.beginPath();
		context.arc(center, center, radius, 0, Math.PI * 2);
		context.clip();
		const scale = Math.max(radius * 2 / image.naturalWidth, radius * 2 / image.naturalHeight);
		const drawWidth = image.naturalWidth * scale;
		const drawHeight = image.naturalHeight * scale;
		const drawX = center - drawWidth / 2;
		const drawY = center - drawHeight / 2;
		context.globalAlpha = opacity;
		context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
		context.restore();
		context.globalAlpha = .1;
		context.strokeStyle = "#6b7280";
		context.lineWidth = 8;
		context.beginPath();
		context.arc(center, center, radius, 0, Math.PI * 2);
		context.stroke();
		const watermarkBlob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", .9));
		if (!watermarkBlob) throw new Error("Unable to create the Grandpa watermark image.");
		return new Uint8Array(await watermarkBlob.arrayBuffer());
	} finally {
		URL.revokeObjectURL(objectUrl);
	}
}
function wrapAddress(value, maxChars = 50) {
	const words = value.trim().replace(/\s+/g, " ").split(" ");
	const lines = [];
	let line = "";
	for (const word of words) {
		let rest = word;
		while (rest.length > maxChars) {
			if (line) {
				lines.push(line);
				line = "";
			}
			lines.push(rest.slice(0, maxChars));
			rest = rest.slice(maxChars);
		}
		if (!rest) continue;
		if (line && line.length + 1 + rest.length > maxChars) {
			lines.push(line);
			line = rest;
		} else line = line ? `${line} ${rest}` : rest;
	}
	if (line) lines.push(line);
	return lines;
}
async function prepareOrderPdf(args) {
	if (!args.customerName.trim()) throw new Error("Customer name is required.");
	if (!/^[6-9]\d{9}$/.test(args.mobile.trim())) throw new Error("A valid 10-digit mobile number is required.");
	if (!args.address.trim()) throw new Error("Customer address is required.");
	if (!args.rows.length) throw new Error("Your cart is empty.");
	const header = await imageBytes(ags_pdf_header_default);
	const headerSize = await jpegDimensions(header);
	const grandpaWatermark = await createWatermarkJpeg("/images/grandpa-watermark.jpeg", .14);
	const grandpaWatermarkSize = await jpegDimensions(grandpaWatermark);
	const date = new Intl.DateTimeFormat("en-IN", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(/* @__PURE__ */ new Date());
	const totals = args.rows.reduce((acc, row) => {
		const mrp = Number(row.product.mrp ?? row.product.price ?? 0);
		const price = Number(row.product.price ?? 0);
		acc.mrp += mrp * row.quantity;
		acc.amount += price * row.quantity;
		return acc;
	}, {
		mrp: 0,
		amount: 0
	});
	const discount = Math.max(0, totals.mrp - totals.amount);
	const orderNo = await generateOrderNumber(args.customerName.trim(), args.mobile.trim(), args.address.trim(), args.rows, totals.amount);
	const chunks = [];
	for (let i = 0; i < args.rows.length; i += ROWS_PER_PAGE) chunks.push(args.rows.slice(i, i + ROWS_PER_PAGE));
	const pages = [];
	for (let pageIndex = 0; pageIndex < chunks.length; pageIndex++) {
		const pageRows = chunks[pageIndex];
		const isLastPage = pageIndex === chunks.length - 1;
		let c = "";
		c += fillColor(1, 1, 1);
		const watermarkSize = 400;
		c += `
q
${watermarkSize.toFixed(2)} 0 0 ${watermarkSize.toFixed(2)}
${(195.27999999999997 / 2).toFixed(2)} ${(441.89 / 2 - 10).toFixed(2)} cm
/Im2 Do
Q
`;
		c += `
q
${HEADER_W.toFixed(2)} 0 0 ${HEADER_H.toFixed(2)}
${HEADER_X.toFixed(2)} ${HEADER_Y.toFixed(2)}
cm
/Im1 Do
Q
`;
		c += fillColor(...TITLE_COLOR);
		c += bold("ORDER ENQUIRY", ORDER_TITLE_X, ORDER_TITLE_Y, 18);
		c += fillColor(...BLACK);
		c += pdfLine("Order No:", 48.19, 622.48, 8.2);
		c += bold(orderNo, 86.47, 622.48, 8.2);
		c += pdfLine(`Date: ${date}`, 48.19, 612.55, 8.2);
		c += bold("AGS CRACKERS", ORDER_TITLE_X, 600.55, 8.2);
		c += pdfLine("Sivakasi to Virudhunagar Main Road - 626005", ORDER_TITLE_X, 588.55, 8.2);
		c += pdfLine("Shop Mobile: 9840023543 / 9629131619", ORDER_TITLE_X, 576.55, 8.2);
		c += bold(`Customer: ${args.customerName.trim()}`, CUSTOMER_X, 648.48, 8.2);
		c += bold(`Customer Mobile: ${args.mobile.trim()}`, CUSTOMER_X, 636.48, 8.2);
		const addressLines = wrapAddress(args.address);
		c += bold("Address:", CUSTOMER_X, 624.48, 8.2);
		addressLines.forEach((line, index) => {
			c += pdfLine(line, CUSTOMER_X, 612.48 - index * 11, 8.2);
		});
		const tableTop = TABLE_TOP - Math.max(0, addressLines.length - 4) * 11;
		const tableHeaderBottom = tableTop - TABLE_HEADER_H;
		const tableBottom = tableHeaderBottom - pageRows.length * TABLE_ROW_H;
		const tableHeight = TABLE_HEADER_H + pageRows.length * TABLE_ROW_H;
		c += rectangle(TABLE_X, tableHeaderBottom, TABLE_W, TABLE_HEADER_H, false);
		c += strokeColor(...TABLE_BORDER);
		c += lineWidth(1.25);
		c += rectangle(TABLE_X, tableBottom, TABLE_W, tableHeight, false);
		c += strokeColor(...TABLE_GRID);
		c += lineWidth(.65);
		for (let i = 1; i < COL.length - 1; i++) c += verticalLine(COL[i], tableTop, tableBottom);
		c += horizontalLine(TABLE_X, tableHeaderBottom, 547.0899999999999);
		for (let i = 1; i <= pageRows.length; i++) c += horizontalLine(TABLE_X, tableHeaderBottom - i * TABLE_ROW_H, 547.0899999999999);
		c += strokeColor(...BLACK);
		c += lineWidth(1.25);
		c += horizontalLine(TABLE_X, tableTop, 547.0899999999999);
		c += fillColor(...BLACK);
		const headerTextY = tableTop - 16;
		c += bold("S.No", 55.86, headerTextY, 8.2);
		c += bold("Product", 87.2, headerTextY, 8.2);
		c += bold("Unit", 261.32, headerTextY, 8.2);
		c += bold("Qty", 312.06, headerTextY, 8.2);
		c += bold("MRP", 384.97, headerTextY, 8.2);
		c += bold("Discount", 438.98, headerTextY, 8.2);
		c += bold("Amount", 511.12, headerTextY, 8.2);
		pageRows.forEach(({ product, quantity }, index) => {
			const rowBaseline = tableHeaderBottom - index * TABLE_ROW_H - 17;
			const mrp = Number(product.mrp ?? product.price ?? 0) * quantity;
			const amount = Number(product.price ?? 0) * quantity;
			const itemDiscount = Math.max(0, mrp - amount);
			c += pdfLine(String(pageIndex * ROWS_PER_PAGE + index + 1), 62.42, rowBaseline, 8.2);
			let productName = String(product.name ?? "");
			if (productName.length > 31) productName = productName.slice(0, 28) + "...";
			c += pdfLine(productName, 87.2, rowBaseline, 8.2);
			c += pdfLine(String(product.unit ?? "-"), 257.9, rowBaseline, 8.2);
			c += pdfLine(String(quantity), 316.12, rowBaseline, 8.2);
			c += pdfLineRight(money(mrp), 403, rowBaseline, 8.2, "F1");
			c += pdfLineRight(money(itemDiscount), 474, rowBaseline, 8.2, "F1");
			c += pdfLineRight(money(amount), 540, rowBaseline, 8.2, "F2");
		});
		if (isLastPage) {
			const summaryTop = tableBottom - 25;
			const summaryBottom = summaryTop - SUMMARY_H;
			c += rectangle(SUMMARY_X, summaryTop - 24, SUMMARY_W, 24, false);
			c += strokeColor(...SUMMARY_BORDER);
			c += lineWidth(1);
			c += rectangle(SUMMARY_X, summaryBottom, SUMMARY_W, SUMMARY_H, false);
			c += strokeColor(...BLACK);
			c += lineWidth(.65);
			c += horizontalLine(SUMMARY_X, summaryTop - 24, 547.0899999999999);
			c += horizontalLine(SUMMARY_X, summaryTop - 46, 547.0899999999999);
			c += verticalLine(204.09, summaryTop, summaryBottom);
			c += verticalLine(360, summaryTop, summaryBottom);
			c += strokeColor(...BLACK);
			c += lineWidth(1);
			c += horizontalLine(SUMMARY_X, summaryTop, 547.0899999999999);
			c += fillColor(...BLACK);
			c += bold("ORDER SUMMARY", 55.19, summaryTop - 16, 8.2);
			c += bold("PAYABLE AMOUNT", 462.65, summaryTop - 16, 8.2);
			c += pdfLine("Total MRP", 55.19, summaryTop - 38, 8.2);
			c += pdfLineRight(money(totals.mrp), 350, summaryTop - 38, 8.2, "F1");
			c += pdfLine("Total Discount", 55.19, summaryTop - 60, 8.2);
			c += pdfLineRight(money(discount), 350, summaryTop - 60, 8.2, "F1");
			c += pdfLineRight(money(totals.amount), 540, summaryTop - 45, 13, "F2");
			const noteTop = summaryBottom - 20;
			const noteY = noteTop - NOTE_H;
			c += strokeColor(...NOTE_BORDER);
			c += lineWidth(.5);
			c += rectangle(NOTE_X, noteY, NOTE_W, NOTE_H, false);
			c += fillColor(...BLACK);
			c += bold("Note:", 56.19, noteTop - 16, 8.2);
			c += pdfLine("Discounted price shown in the catalogue. Final availability is confirmed by AGS CRACKERS.", 77.14, noteTop - 16, 8.2);
		}
		c += fillColor(...FOOTER_COLOR);
		c += pdfLine("AGS CRACKERS - Safe & Joyful Celebrations", 213.1, FOOTER_Y, 8.2);
		if (chunks.length > 1) c += pdfLine(`Page ${pageIndex + 1} of ${chunks.length}`, 500, FOOTER_Y, 7);
		pages.push(c);
	}
	const objectMap = /* @__PURE__ */ new Map();
	const pageCount = pages.length;
	const fontRegular = 3 + pageCount * 2;
	const fontBold = fontRegular + 1;
	const imageObject = fontBold + 1;
	const watermarkObject = imageObject + 1;
	const objectCount = watermarkObject;
	const pdfHeaderBytes = ascii("%PDF-1.4\n%ÿÿÿÿ\n");
	objectMap.set(1, ascii("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"));
	const kids = Array.from({ length: pageCount }, (_, index) => `${3 + index * 2} 0 R`).join(" ");
	objectMap.set(2, ascii(`2 0 obj
<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>\nendobj\n`));
	pages.forEach((content, index) => {
		const pageObject = 3 + index * 2;
		const contentObject = pageObject + 1;
		objectMap.set(pageObject, ascii(`${pageObject} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /ProcSet [/PDF /Text /ImageC] /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> /XObject << /Im1 ${imageObject} 0 R /Im2 ${watermarkObject} 0 R >> >> /Contents ${contentObject} 0 R >>\nendobj\n`));
		const contentBytes = ascii(content);
		objectMap.set(contentObject, concatBytes([
			ascii(`${contentObject} 0 obj\n<< /Length ${contentBytes.length} >>\nstream\n`),
			contentBytes,
			ascii(`endstream\nendobj\n`)
		]));
	});
	objectMap.set(fontRegular, ascii(`${fontRegular} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`));
	objectMap.set(fontBold, ascii(`${fontBold} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`));
	objectMap.set(imageObject, concatBytes([
		ascii(`${imageObject} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${headerSize.width} /Height ${headerSize.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${header.length} >>\nstream\n`),
		header,
		ascii(`\nendstream\nendobj\n`)
	]));
	objectMap.set(watermarkObject, concatBytes([
		ascii(`${watermarkObject} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${grandpaWatermarkSize.width} /Height ${grandpaWatermarkSize.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${grandpaWatermark.length} >>\nstream\n`),
		grandpaWatermark,
		ascii(`\nendstream\nendobj\n`)
	]));
	const body = [pdfHeaderBytes];
	const offsets = [];
	let offset = pdfHeaderBytes.length;
	for (let id = 1; id <= objectCount; id++) {
		const object = objectMap.get(id);
		if (!object) throw new Error(`Missing PDF object ${id}`);
		offsets[id] = offset;
		body.push(object);
		offset += object.length;
	}
	const xrefOffset = offset;
	let xref = `xref\n0 ${objectCount + 1}\n0000000000 65535 f \n`;
	for (let id = 1; id <= objectCount; id++) xref += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
	xref += `trailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
	body.push(ascii(xref));
	const finalBytes = concatBytes(body);
	return {
		blob: new Blob([finalBytes], { type: "application/pdf" }),
		fileName: `${orderNo}-AGS-CRACKERS-Order.pdf`,
		orderNo
	};
}
function downloadPreparedOrderPdf(prepared) {
	const url = URL.createObjectURL(prepared.blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = prepared.fileName;
	document.body.appendChild(anchor);
	anchor.click();
	window.dispatchEvent(new CustomEvent("ags-order-pdf-downloaded", { detail: { orderNo: prepared.orderNo } }));
	anchor.remove();
	setTimeout(() => {
		URL.revokeObjectURL(url);
	}, 1500);
}
async function sharePreparedOrderPdf(prepared) {
	if (typeof navigator === "undefined" || typeof navigator.share !== "function") throw new Error("PDF sharing is not supported in this browser. Please use Download Order PDF.");
	const file = new File([prepared.blob], prepared.fileName, { type: "application/pdf" });
	if (typeof navigator.canShare === "function" && !navigator.canShare({ files: [file] })) throw new Error("This browser cannot share PDF files. Please use Download Order PDF.");
	await navigator.share({
		title: `${prepared.orderNo} - AGS CRACKERS`,
		text: `AGS CRACKERS Order ${prepared.orderNo}`,
		files: [file]
	});
}
async function downloadOrderPdf(args) {
	const prepared = await prepareOrderPdf(args);
	downloadPreparedOrderPdf(prepared);
	return prepared;
}
function Cart() {
	const { items, count, getProduct, update, remove, clear } = useCart();
	const [name, setName] = (0, import_react.useState)("");
	const [mobile, setMobile] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [pdfBusy, setPdfBusy] = (0, import_react.useState)(false);
	const [pdfShareBusy, setPdfShareBusy] = (0, import_react.useState)(false);
	const [preparedPdf, setPreparedPdf] = (0, import_react.useState)(null);
	const [preparedPdfKey, setPreparedPdfKey] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => items.map((item) => ({
		...item,
		product: getProduct(item.slug)
	})).filter((row) => !!row.product), [items, getProduct]);
	const totals = (0, import_react.useMemo)(() => rows.reduce((acc, row) => {
		const mrp = row.product.mrp ?? row.product.price ?? 0;
		const price = row.product.price ?? 0;
		acc.mrp += mrp * row.quantity;
		acc.amount += price * row.quantity;
		return acc;
	}, {
		mrp: 0,
		amount: 0
	}), [rows]);
	const discount = Math.max(0, totals.mrp - totals.amount);
	const allPriced = rows.every((row) => row.product.price != null);
	const pdfRequestKey = (0, import_react.useMemo)(() => JSON.stringify({
		name: name.trim(),
		mobile: mobile.replace(/\D/g, ""),
		address: address.trim(),
		rows: rows.map((row) => ({
			slug: row.product.slug,
			quantity: row.quantity
		}))
	}), [
		name,
		mobile,
		address,
		rows
	]);
	const validate = () => {
		if (!name.trim()) {
			setError("Please enter your name to continue.");
			return false;
		}
		const cleanMobile = mobile.replace(/\D/g, "");
		if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
			setError("Please enter a valid 10-digit mobile number.");
			return false;
		}
		if (!address.trim()) {
			setError("Please enter your complete address.");
			return false;
		}
		if (!rows.length) {
			setError("Your cart is empty.");
			return false;
		}
		setError("");
		return true;
	};
	const downloadPdf = async () => {
		if (!validate()) return;
		setPdfBusy(true);
		setError("");
		try {
			if (preparedPdf && preparedPdfKey === pdfRequestKey) {
				downloadPreparedOrderPdf(preparedPdf);
				return;
			}
			await downloadOrderPdf({
				rows,
				customerName: name.trim(),
				mobile: mobile.replace(/\D/g, ""),
				address: address.trim()
			});
		} catch (e) {
			console.error(e);
			setError("Could not create the PDF. Please try again.");
		} finally {
			setPdfBusy(false);
		}
	};
	const sharePdf = async () => {
		if (!validate()) return;
		if (preparedPdf && preparedPdfKey === pdfRequestKey) {
			try {
				setError("");
				await sharePreparedOrderPdf(preparedPdf);
			} catch (e) {
				console.error(e);
				setError(e instanceof Error ? e.message : "Could not share the PDF. Please try again.");
			}
			return;
		}
		setPdfShareBusy(true);
		setError("");
		try {
			const prepared = await prepareOrderPdf({
				rows,
				customerName: name.trim(),
				mobile: mobile.replace(/\D/g, ""),
				address: address.trim()
			});
			setPreparedPdf(prepared);
			setPreparedPdfKey(pdfRequestKey);
			setError("PDF is ready. Tap “Share PDF on WhatsApp” again to share it.");
		} catch (e) {
			console.error(e);
			setError(e instanceof Error ? e.message : "Could not prepare the PDF. Please try again.");
		} finally {
			setPdfShareBusy(false);
		}
	};
	const order = () => {
		if (!validate()) return;
		const cleanMobile = mobile.replace(/\D/g, "");
		const lines = rows.map(({ product, quantity }) => `• ${product.name} | Qty: ${quantity} | ${product.unit ?? ""} | Price: ${priceText(product.price)} | Subtotal: ${priceText((product.price ?? 0) * quantity)}`);
		const message = `Hi AGS CRACKER, I would like to enquire about an order.\nCustomer Name: ${name.trim()}\nMobile Number: ${cleanMobile}\nAddress: ${address.trim()}\n\n${lines.join("\n")}\n\nTotal MRP: ${priceText(totals.mrp)}\nTotal Discount: ${priceText(discount)}\nTotal Amount: ${allPriced ? priceText(totals.amount) : "To be confirmed by AGS CRACKER"}\n\nPlease confirm the current prices and availability.`;
		window.open(whatsapp(message), "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Your selection",
		title: "Shopping Cart",
		description: "Review your picks, download a branded order PDF, or send your enquiry through WhatsApp."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "page-container section-space",
		children: count === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-14 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
					size: 45,
					className: "mx-auto text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-title mt-5 text-4xl text-navy",
					children: "Your cart is empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "A celebration begins with a little spark."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "navy",
					className: "mt-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						children: ["Explore products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-bold",
					children: [
						"Items (",
						count,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-primary",
					onClick: clear,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Clear cart"]
				})]
			}), rows.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid grid-cols-[76px_minmax(0,1fr)] gap-4 border-b border-border py-5 sm:grid-cols-[115px_minmax(0,1fr)_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: product.slug },
						className: "aspect-square overflow-hidden rounded-sm bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$slug",
								params: { slug: product.slug },
								className: "font-display text-xl font-bold text-navy hover:text-primary sm:text-2xl",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									product.category,
									" ·",
									" ",
									product.unit ?? "1 Box"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-primary",
									children: priceText(product.price)
								}), product.mrp != null && product.price != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground line-through",
									children: [
										"MRP",
										" ",
										priceText(product.mrp)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "link",
								size: "sm",
								className: "mt-2 h-auto p-0 text-xs text-muted-foreground",
								onClick: () => remove(product.slug),
								children: "Remove"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-start-2 flex h-9 w-fit items-center border border-input sm:col-start-3 sm:row-start-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8",
								"aria-label": `Decrease ${product.name} quantity`,
								onClick: () => quantity === 1 ? remove(product.slug) : update(product.slug, quantity - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-center text-sm",
								children: quantity
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8",
								"aria-label": `Increase ${product.name} quantity`,
								onClick: () => update(product.slug, quantity + 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
							})
						]
					})
				]
			}, product.slug))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-sm border border-border bg-card p-6 lg:sticky lg:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-navy",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3 border-b border-border pb-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Items" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: count
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total MRP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: priceText(totals.mrp) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-emerald-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold",
									children: [
										"-",
										" ",
										priceText(discount)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between pt-2 text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-navy",
									children: "Total Amount"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-primary",
									children: allPriced ? priceText(totals.amount) : "To be confirmed"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs leading-6 text-muted-foreground",
						children: "The PDF contains your selected items, quantities, MRP, discount, total amount, customer name, mobile number, complete address, and AGS CRACKERS festive header."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "customer-name",
						className: "mt-6 block text-xs font-bold uppercase tracking-wider",
						children: ["Customer Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "customer-name",
						value: name,
						onChange: (e) => {
							setName(e.target.value);
							setPreparedPdf(null);
							setPreparedPdfKey("");
							setError("");
						},
						placeholder: "Your name",
						className: "mt-2 h-11 w-full rounded-sm border border-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "customer-mobile",
						className: "mt-4 block text-xs font-bold uppercase tracking-wider",
						children: ["Mobile Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "customer-mobile",
						type: "tel",
						inputMode: "numeric",
						maxLength: 10,
						value: mobile,
						onChange: (e) => {
							const value = e.target.value.replace(/\D/g, "").slice(0, 10);
							setMobile(value);
							setPreparedPdf(null);
							setPreparedPdfKey("");
							setError("");
						},
						placeholder: "10-digit mobile number",
						className: "mt-2 h-11 w-full rounded-sm border border-input px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "customer-address",
						className: "mt-4 block text-xs font-bold uppercase tracking-wider",
						children: ["Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "*"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "customer-address",
						value: address,
						maxLength: 180,
						rows: 4,
						onChange: (e) => {
							setAddress(e.target.value);
							setPreparedPdf(null);
							setPreparedPdfKey("");
							setError("");
						},
						placeholder: "Door no., street, area, city, pincode",
						className: "mt-2 min-h-28 w-full resize-y rounded-sm border border-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "mt-2 text-xs text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "navy",
						size: "lg",
						className: "mt-4 w-full",
						onClick: downloadPdf,
						disabled: pdfBusy || pdfShareBusy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), pdfBusy ? "Creating PDF..." : "Download Order PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "mt-3 w-full",
						onClick: sharePdf,
						disabled: pdfBusy || pdfShareBusy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), pdfShareBusy ? "Preparing PDF..." : preparedPdf && preparedPdfKey === pdfRequestKey ? "Share PDF on WhatsApp" : "Prepare PDF for WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "lg",
						className: "mt-3 w-full",
						onClick: order,
						disabled: pdfBusy || pdfShareBusy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Order on WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "PDF is for order/enquiry reference. Final availability is confirmed by AGS CRACKERS."
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Cart as component };
