import{G as e,o as t,q as n}from"./useStore-I5DtTLOq.js";import{_ as r,c as i,g as a,h as o,i as s,l as c,m as l,r as u,s as d,t as f}from"./button-BpzTRqwl.js";import{t as p}from"./arrow-left-BUlEGHRp.js";import{t as m}from"./product-card-CknZNrTA.js";import{a as h,c as g,l as _,s as v}from"./index-u4oaD8UK.js";var y=s(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),b=s(`truck`,[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]),x=n(e()),S=t();function C(){let[e,t]=(0,x.useState)(0),n=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=window.setInterval(()=>t(e=>(e+1)%o.length),6e3);return()=>window.clearInterval(e)},[]);let s=e=>t(t=>(t+e+o.length)%o.length),C=o[e]??o[0],w=[o[1].image,o[2].image,o[3].image];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`style`,{children:`
        @keyframes ags-firework-burst {
          0%, 40% {
            transform: scale(0.05);
            opacity: 0;
          }
          48% {
            transform: scale(0.35);
            opacity: 1;
          }
          62% {
            transform: scale(1);
            opacity: 0.9;
          }
          82% {
            transform: scale(1.2);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @keyframes ags-rocket-rise {
          0%, 12% {
            transform: translateY(90px);
            opacity: 0;
          }
          18% {
            opacity: 0.95;
          }
          45% {
            transform: translateY(-190px);
            opacity: 1;
          }
          50%, 100% {
            transform: translateY(-190px);
            opacity: 0;
          }
        }

        .ags-firework {
          position: absolute;
          width: 92px;
          height: 92px;
          border-radius: 50%;
          opacity: 0;
          animation: ags-firework-burst 4.8s ease-out infinite;
          filter: drop-shadow(0 0 9px rgba(255, 214, 74, .75));
        }

        .ags-firework::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 0deg,
              rgba(255,214,74,.95) 0deg 3deg,
              transparent 3deg 15deg
            );
        }

        .ags-firework-1 {
          top: 17%;
          left: 22%;
        }

        .ags-firework-2 {
          top: 13%;
          right: 20%;
          animation-delay: 1.5s;
          filter: drop-shadow(0 0 9px rgba(255,90,110,.75));
        }

        .ags-firework-2::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 12deg,
              rgba(255,100,125,.95) 0deg 3deg,
              transparent 3deg 15deg
            );
        }

        .ags-firework-3 {
          top: 34%;
          right: 8%;
          width: 72px;
          height: 72px;
          animation-delay: 3s;
          filter: drop-shadow(0 0 9px rgba(80,190,255,.75));
        }

        .ags-firework-3::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 4deg,
              rgba(90,205,255,.95) 0deg 3deg,
              transparent 3deg 14deg
            );
        }

        .ags-firework-4 {
          top: 27%;
          left: 52%;
          width: 64px;
          height: 64px;
          animation-delay: 3.8s;
          filter: drop-shadow(0 0 9px rgba(130,255,120,.75));
        }

        .ags-firework-4::before {
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.95) 0 2px,
              transparent 3px
            ),
            repeating-conic-gradient(
              from 8deg,
              rgba(150,255,120,.95) 0deg 3deg,
              transparent 3deg 14deg
            );
        }

        .ags-rocket {
          position: absolute;
          bottom: 2%;
          width: 3px;
          height: 44px;
          border-radius: 999px;
          opacity: 0;
          background: linear-gradient(
            to top,
            transparent,
            rgba(255,255,255,.95),
            rgba(255,214,74,1)
          );
          box-shadow: 0 0 9px rgba(255,214,74,.8);
          animation: ags-rocket-rise 4.8s ease-in infinite;
        }

        .ags-rocket-1 {
          left: 27%;
          animation-delay: .2s;
        }

        .ags-rocket-2 {
          right: 24%;
          animation-delay: 2s;
        }

        @media (max-width: 640px) {
          .ags-firework {
            width: 58px;
            height: 58px;
          }

          .ags-firework-3,
          .ags-firework-4 {
            width: 48px;
            height: 48px;
          }

          .ags-firework-1 {
            left: 10%;
          }

          .ags-firework-2 {
            right: 7%;
          }

          .ags-rocket-1 {
            left: 18%;
          }

          .ags-rocket-2 {
            right: 14%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ags-firework,
          .ags-rocket {
            animation: none;
            opacity: 0;
          }
        }
      `}),(0,S.jsxs)(`main`,{children:[(0,S.jsxs)(`section`,{className:`relative h-[520px] overflow-hidden bg-navy sm:h-[590px] lg:h-[625px]`,"aria-label":`Featured celebrations`,onTouchStart:e=>{n.current=e.touches[0]?.clientX??null},onTouchEnd:e=>{n.current!==null&&e.changedTouches[0]&&Math.abs(e.changedTouches[0].clientX-n.current)>55&&s(e.changedTouches[0].clientX<n.current?1:-1),n.current=null},children:[o.map((t,n)=>(0,S.jsx)(`img`,{src:t.image,alt:t.title,loading:n===0?`eager`:`lazy`,fetchPriority:n===0?`high`:void 0,className:`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${n===e?`opacity-100`:`opacity-0`}`},t.title)),(0,S.jsx)(`div`,{className:`hero-shade absolute inset-0`}),(0,S.jsxs)(`div`,{className:`pointer-events-none absolute inset-0 overflow-hidden`,"aria-hidden":`true`,children:[(0,S.jsx)(`div`,{className:`ags-firework ags-firework-1`}),(0,S.jsx)(`div`,{className:`ags-firework ags-firework-2`}),(0,S.jsx)(`div`,{className:`ags-firework ags-firework-3`}),(0,S.jsx)(`div`,{className:`ags-firework ags-firework-4`}),(0,S.jsx)(`div`,{className:`ags-rocket ags-rocket-1`}),(0,S.jsx)(`div`,{className:`ags-rocket ags-rocket-2`})]}),(0,S.jsx)(`div`,{className:`page-container relative flex h-full flex-col justify-center pb-12 text-secondary-foreground`,children:(0,S.jsxs)(`div`,{className:`max-w-[580px] animate-in fade-in slide-in-from-bottom-3 duration-500`,children:[(0,S.jsxs)(`p`,{className:`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold`,children:[(0,S.jsx)(`span`,{className:`gold-rule`}),`The season of celebration`]}),(0,S.jsx)(`h1`,{className:`display-title max-w-[540px] text-[clamp(3.4rem,6vw,6.5rem)]`,children:C.title}),(0,S.jsx)(`p`,{className:`mt-5 max-w-md text-sm leading-7 text-secondary-foreground/85 sm:text-lg`,children:C.subtitle}),(0,S.jsx)(f,{asChild:!0,variant:`gold`,size:`lg`,className:`mt-8 h-12 px-7 text-sm font-bold`,children:(0,S.jsxs)(r,{to:C.url,children:[C.cta,(0,S.jsx)(_,{})]})})]},e)}),(0,S.jsx)(`div`,{className:`absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2`,children:o.map((n,r)=>(0,S.jsx)(f,{variant:`ghost`,size:`icon`,className:`h-7 w-7 p-0 hover:bg-transparent`,"aria-label":`Go to slide ${r+1}`,onClick:()=>t(r),children:(0,S.jsx)(`span`,{className:`block h-1.5 rounded-full transition-all ${r===e?`w-7 bg-gold`:`w-1.5 bg-secondary-foreground/60`}`})},n.title))}),(0,S.jsxs)(`div`,{className:`absolute bottom-5 right-5 hidden gap-2 sm:flex lg:right-12`,children:[(0,S.jsx)(f,{variant:`light`,size:`iconLg`,"aria-label":`Previous slide`,onClick:()=>s(-1),children:(0,S.jsx)(p,{})}),(0,S.jsx)(f,{variant:`gold`,size:`iconLg`,"aria-label":`Next slide`,onClick:()=>s(1),children:(0,S.jsx)(_,{})})]})]}),(0,S.jsx)(`section`,{className:`border-b border-border bg-card`,children:(0,S.jsx)(`div`,{className:`page-container grid grid-cols-2 gap-y-5 py-6 lg:grid-cols-4 lg:gap-y-0`,children:[{icon:g,label:`Visit us`,value:d,href:`https://www.google.com/maps/search/?api=1&query=Virudhunagar%2C+Tamil+Nadu+626005`},{icon:v,label:`Call us`,value:i,href:`tel:+91${i}`},{icon:u,label:`WhatsApp`,value:i,href:a()},{icon:b,label:`Service`,value:`Fast & Reliable Service`,href:`/contact`}].map(e=>(0,S.jsxs)(`a`,{href:e.href,className:`flex min-w-0 items-center gap-3 pr-3 hover:text-primary sm:gap-4 lg:border-l lg:border-border lg:pl-7 first:lg:border-0 first:lg:pl-0`,children:[(0,S.jsx)(`span`,{className:`grid size-10 shrink-0 place-items-center rounded-sm bg-muted text-primary sm:size-12`,children:(0,S.jsx)(e.icon,{size:20})}),(0,S.jsxs)(`span`,{className:`min-w-0`,children:[(0,S.jsx)(`span`,{className:`block text-[10px] font-bold uppercase tracking-widest text-muted-foreground`,children:e.label}),(0,S.jsx)(`span`,{className:`block text-xs font-bold leading-5 sm:text-sm`,children:e.value})]})]},e.label))})}),(0,S.jsx)(`section`,{className:`section-space overflow-hidden`,children:(0,S.jsxs)(`div`,{className:`page-container`,children:[(0,S.jsxs)(`div`,{className:`flex items-end justify-between gap-4`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary`,children:`Find your spark`}),(0,S.jsx)(`h2`,{className:`display-title text-4xl text-navy sm:text-5xl`,children:`Shop by Category`})]}),(0,S.jsx)(f,{asChild:!0,variant:`link`,className:`shrink-0 text-xs sm:text-sm`,children:(0,S.jsxs)(r,{to:`/products`,children:[`View all`,(0,S.jsx)(_,{})]})})]}),(0,S.jsx)(`div`,{className:`mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 sm:gap-5`,children:c.map((e,t)=>(0,S.jsxs)(r,{to:`/products`,search:{category:e},className:`group relative aspect-[0.85] w-[150px] shrink-0 snap-start overflow-hidden rounded-sm bg-navy sm:w-[205px]`,children:[(0,S.jsx)(`img`,{src:w[t%w.length]??w[0],alt:`${e} category`,loading:`lazy`,className:`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110`}),(0,S.jsx)(`span`,{className:`image-shade absolute inset-0`}),(0,S.jsxs)(`span`,{className:`absolute bottom-4 left-4 right-3 flex items-end justify-between gap-2 font-display text-xl font-bold leading-none text-secondary-foreground sm:text-2xl`,children:[e,(0,S.jsx)(y,{size:17,className:`shrink-0 text-gold`})]})]},e))})]})}),(0,S.jsx)(`section`,{className:`section-space bg-muted`,children:(0,S.jsxs)(`div`,{className:`page-container`,children:[(0,S.jsxs)(`div`,{className:`flex items-end justify-between gap-4`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary`,children:`Made for memorable moments`}),(0,S.jsx)(`h2`,{className:`display-title text-4xl text-navy sm:text-5xl`,children:`Featured Fireworks`}),(0,S.jsx)(`p`,{className:`mt-3 text-sm text-muted-foreground`,children:`Explore a selection of favourites. Contact us for current prices and availability.`})]}),(0,S.jsx)(f,{asChild:!0,variant:`link`,className:`hidden shrink-0 sm:inline-flex`,children:(0,S.jsxs)(r,{to:`/products`,children:[`Explore all`,(0,S.jsx)(_,{})]})})]}),(0,S.jsx)(`div`,{className:`mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6`,children:l.map(e=>(0,S.jsx)(m,{product:e},e.slug))})]})}),(0,S.jsxs)(`section`,{className:`relative overflow-hidden bg-navy`,children:[(0,S.jsx)(`img`,{src:o[1].image,alt:`Festive fireworks gift selection`,loading:`lazy`,className:`absolute inset-0 h-full w-full object-cover opacity-60`}),(0,S.jsx)(`div`,{className:`hero-shade absolute inset-0`}),(0,S.jsxs)(`div`,{className:`page-container relative py-16 text-secondary-foreground sm:py-24`,children:[(0,S.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.2em] text-gold`,children:`Celebrate together`}),(0,S.jsx)(`h2`,{className:`display-title mt-3 max-w-xl text-5xl sm:text-6xl`,children:`A celebration for everyone`}),(0,S.jsx)(`p`,{className:`mt-4 max-w-md text-sm leading-7 text-secondary-foreground/80`,children:`Looking for a festive assortment? Ask us about our Family, Kids, Premium, Budget and Festival combos.`}),(0,S.jsx)(f,{asChild:!0,variant:`gold`,className:`mt-7`,children:(0,S.jsxs)(r,{to:`/combo-offers`,children:[`Explore combo offers`,(0,S.jsx)(_,{})]})})]})]}),(0,S.jsx)(`section`,{className:`bg-card py-12`,children:(0,S.jsxs)(`div`,{className:`page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`,children:[(0,S.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,S.jsx)(`span`,{className:`grid size-12 shrink-0 place-items-center rounded-sm bg-muted text-primary`,children:(0,S.jsx)(h,{})}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h2`,{className:`display-title text-3xl text-navy sm:text-4xl`,children:`Bulk Orders Available`}),(0,S.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:`For Weddings | Functions | Corporate Gifting`})]})]}),(0,S.jsx)(f,{asChild:!0,variant:`navy`,size:`lg`,children:(0,S.jsxs)(`a`,{href:a(`Hi AGS CRACKER, I would like to enquire about a bulk order for a celebration. Please share the details.`),target:`_blank`,rel:`noopener noreferrer`,children:[`Contact Now`,(0,S.jsx)(_,{})]})})]})})]})]})}export{C as component};