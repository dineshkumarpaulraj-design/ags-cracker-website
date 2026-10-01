import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/store/site';
import { LOCATION, mapUrl, PHONE, whatsapp } from '@/lib/catalogue';

const SECOND_PHONE = '9629131619';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact AGS CRACKER | Virudhunagar',
      },
      {
        name: 'description',
        content:
          'Contact AGS CRACKER in Virudhunagar, Tamil Nadu at 9840023543 or 9629131619, or send an enquiry on WhatsApp.',
      },
      {
        property: 'og:title',
        content: 'Contact AGS CRACKER',
      },
      {
        property: 'og:description',
        content:
          'Call or WhatsApp AGS CRACKER in Virudhunagar for fireworks enquiries.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();

    window.open(
      whatsapp(
        `Hi AGS CRACKER, I have an enquiry.
Name: ${name.trim()}
Phone: ${phone.trim()}
Message: ${message.trim()}`,
      ),
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <main>
      <PageIntro
        eyebrow="We're here to help"
        title="Get in Touch"
        description="Have a question about fireworks, combos or bulk orders? We'd love to hear from you."
      />

      <section className="page-container section-space grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Contact AGS CRACKER
          </p>

          <h2 className="display-title mt-3 text-4xl text-navy sm:text-5xl">
            Let's make it a celebration.
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Reach out to us directly or send a message using the form. We will
            help with product enquiries and current offer details.
          </p>

          <div className="mt-9 space-y-6">
            {/* Visit Us */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-primary"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary">
                <MapPin size={20} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Visit us
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  {LOCATION}
                </span>
              </span>
            </a>

            {/* Call Us - Both Numbers Displayed */}
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary">
                <Phone size={20} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Call us
                </span>

                <a
                  href={`tel:+91${PHONE}`}
                  className="mt-1 block text-sm font-semibold hover:text-primary"
                >
                  {PHONE}
                </a>

                <a
                  href={`tel:+91${SECOND_PHONE}`}
                  className="mt-1 block text-sm font-semibold hover:text-primary"
                >
                  {SECOND_PHONE}
                </a>
              </span>
            </div>

            {/* WhatsApp - ONLY 9840023543 */}
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-primary"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary">
                <MessageCircle size={20} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </span>

                <span className="mt-1 block text-sm font-semibold">
                  {PHONE}
                </span>
              </span>
            </a>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-muted text-primary">
                <Clock size={20} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Business hours
                </span>

                <span className="mt-1 block text-sm font-semibold">
                  Please contact us for current hours.
                </span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Call Now - Primary Number */}
            <Button asChild variant="navy">
              <a href={`tel:+91${PHONE}`}>
                <Phone />
                Call Now
              </a>
            </Button>

            {/* WhatsApp - Always goes to 9840023543 */}
            <Button asChild variant="light">
              <a
                href={whatsapp()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Enquiry Form */}
        <form
          onSubmit={submit}
          className="space-y-5 rounded-sm border border-border bg-card p-6 sm:p-9"
        >
          <h2 className="font-display text-3xl font-bold text-navy">
            Send an enquiry
          </h2>

          <p className="text-sm text-muted-foreground">
            Your message will open in WhatsApp for you to send.
          </p>

          <label className="block text-sm font-semibold">
            Your name

            <input
              required
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 h-12 w-full rounded-sm border border-input px-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="block text-sm font-semibold">
            Phone number

            <input
              required
              inputMode="tel"
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="mt-2 h-12 w-full rounded-sm border border-input px-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <label className="block text-sm font-semibold">
            Your message

            <textarea
              required
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              rows={5}
              className="mt-2 w-full rounded-sm border border-input p-4 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
            />
          </label>

          <Button
            type="submit"
            variant="navy"
            size="lg"
            className="w-full"
          >
            Continue to WhatsApp
            <ArrowRight />
          </Button>
        </form>
      </section>

      {/* Google Maps */}
      <section className="bg-muted py-14">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Find us
              </p>

              <h2 className="display-title mt-2 text-4xl text-navy">
                Visit Virudhunagar
              </h2>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              Open Google Maps
              <ArrowRight size={16} />
            </a>
          </div>

          <iframe
            title="Map of Virudhunagar, Tamil Nadu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-6 h-[340px] w-full rounded-sm border-0 bg-card"
            src="https://maps.google.com/maps?q=Virudhunagar%2C%20Tamil%20Nadu%20626005&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </section>
    </main>
  );
}
