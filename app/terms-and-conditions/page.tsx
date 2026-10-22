import Link from "next/link"

const TCPage = () => {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <header className="mb-10 border-b border-slate-200 pb-8">
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">
          ISAM GLOBAL
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">Effective Date:</span>{" "}
          8 August 2026
        </p>
      </header>

      <div className="space-y-5 leading-7">
        <p>
          Welcome to <b>ISAM GLOBAL</b> (“ISAM GLOBAL”, “we”, “us” or “our”).
          These Terms and Conditions govern your access to and use of{" "}
          <Link
            href="https://www.isamglobal.com"
            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
          >
            www.isamglobal.com
          </Link>{" "}
          (the “Website”), including any enquiries, demonstrations, software
          subscriptions, implementation services, consulting services, support
          services, or other services offered through it.
        </p>
        <p>
          By accessing or using the Website, you agree to these Terms. If you do
          not agree, please do not use the Website.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            1. About ISAM GLOBAL
          </h2>
          <p className="leading-7">
            ISAM GLOBAL is a UAE-based IT and software solutions business
            operating from Sharjah, United Arab Emirates. We provide technology
            consulting, software solutions, implementation, training, support,
            and related digital services.
          </p>
          <p className="leading-7">Our solutions may include, among others:</p>
          <ul className="list-disc space-y-2 pl-6 leading-7 marker:text-slate-400">
            <li>
              <strong>THREDEX</strong> – Apartment and Property Management
              System
            </li>
            <li>
              <strong>ETLAB</strong> – School and College ERP
            </li>
            <li>
              <strong>Wrapzoid</strong> – Digital booking platform
            </li>
            <li>
              <strong>MeetAdr</strong> – Doctor and healthcare appointment
              platform
            </li>
          </ul>
          <p className="leading-7">For enquiries, please contact us at:</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 leading-7">
            <p>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <Link
                href="mailto:info@isamglobal.com"
                className="text-blue-700 underline underline-offset-4 hover:text-blue-800"
              >
                info@isamglobal.com
              </Link>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Location:</span>{" "}
              United Arab Emirates
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            2. Website Purpose
          </h2>
          <p className="leading-7">
            The Website provides general information about ISAM GLOBAL, its
            products, services, and business activities. Website content is for
            general information only and does not create a binding offer,
            guarantee, or contractual commitment unless confirmed in a written
            proposal, quotation, order form, service agreement, subscription
            agreement, or invoice issued by ISAM GLOBAL.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            3. Eligibility and Acceptable Use
          </h2>
          <p className="leading-7">
            You may use the Website only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <ul className="list-disc space-y-2 pl-6 leading-7 marker:text-slate-400">
            <li>
              Use the Website in any way that violates applicable law or
              regulation.
            </li>
            <li>
              Attempt to gain unauthorised access to the Website, its servers,
              accounts, systems, or networks.
            </li>
            <li>
              Introduce viruses, malware, harmful code, or disruptive
              technology.
            </li>
            <li>
              Copy, reproduce, modify, distribute, sell, or exploit Website
              content without our written permission.
            </li>
            <li>
              Use the Website to send spam, misleading information, offensive
              material, or unlawful content.
            </li>
            <li>
              Misrepresent your identity, organisation, or authority when
              contacting us.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            4. Product and Service Enquiries
          </h2>
          <p className="leading-7">
            Any request for a quotation, demo, consultation, implementation,
            subscription, or support through the Website is subject to our
            review and acceptance.
          </p>
          <p className="leading-7">
            ISAM GLOBAL may request additional information before providing a
            proposal or commencing services. We reserve the right to accept,
            reject, or discontinue an enquiry or service request where permitted
            by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            5. Separate Service Agreements
          </h2>
          <p className="leading-7">
            Where you purchase, subscribe to, license, implement, or use an ISAM
            GLOBAL software product or service, the relevant written agreement,
            quotation, order form, Service Level Agreement (SLA), licence
            agreement, or subscription terms will apply.
          </p>
          <p className="leading-7">
            If there is a conflict between these Website Terms and a signed
            commercial agreement, the signed commercial agreement will prevail
            for the relevant service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            6. Fees, Payments and Taxes
          </h2>
          <p className="leading-7">
            All fees, payment schedules, subscription terms, implementation
            charges, support charges, and applicable taxes will be stated in the
            relevant quotation, invoice, or written agreement.
          </p>
          <p className="leading-7">Unless stated otherwise:</p>
          <ul className="list-disc space-y-2 pl-6 leading-7 marker:text-slate-400">
            <li>
              Fees are payable in advance or according to the agreed payment
              schedule.
            </li>
            <li>
              VAT or other applicable taxes may be added where required by law.
            </li>
            <li>
              Delayed payments may affect access to software, support,
              implementation, or other services.
            </li>
            <li>
              Refunds, cancellations, and renewals will be handled according to
              the applicable agreement and mandatory legal requirements.
            </li>
          </ul>
          <p className="leading-7">
            Nothing in these Terms limits rights that cannot legally be
            excluded.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            7. Accounts and Login Credentials
          </h2>
          <p className="leading-7">
            If you are provided with login credentials for any ISAM GLOBAL
            platform, portal, demo environment, or software solution, you are
            responsible for maintaining the confidentiality of those
            credentials.
          </p>
          <p className="leading-7">
            You must immediately inform us if you suspect unauthorised access,
            loss, misuse, or disclosure of your account details. You are
            responsible for activities performed through your account where
            caused by your failure to protect access credentials.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            8. Intellectual Property
          </h2>
          <p className="leading-7">
            All Website content, including text, logos, branding, designs,
            software, user interfaces, graphics, documents, videos, product
            names, and other materials are owned by or licensed to ISAM GLOBAL
            and are protected by applicable intellectual-property laws.
          </p>
          <p className="leading-7">
            You may view and use Website content for legitimate personal or
            business-evaluation purposes only. You may not use our intellectual
            property without prior written permission.
          </p>
          <p className="leading-7">
            “ISAM GLOBAL”, “THREDEX”, “ETLAB”, “Wrapzoid”, “MeetAdr”, and
            associated logos or product marks may not be used without written
            approval.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            9. Customer Data and Confidentiality
          </h2>
          <p className="leading-7">
            Where ISAM GLOBAL provides software, consulting, implementation, or
            support services, each party must protect the other party’s
            confidential business information and use it only for the agreed
            business purpose.
          </p>
          <p className="leading-7">
            Customers remain responsible for ensuring that the information,
            documents, personal data, and content they provide to us are
            accurate, lawful, and properly authorised for use.
          </p>
          <p className="leading-7">
            Data handling is governed by our Privacy Policy and any applicable
            data-processing or service agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            10. Third-Party Links and Services
          </h2>
          <p className="leading-7">
            The Website may contain links to third-party websites, software,
            payment providers, social-media platforms, or external resources.
            These links are provided for convenience only.
          </p>
          <p className="leading-7">
            ISAM GLOBAL does not control, endorse, or accept responsibility for
            third-party content, availability, security, policies, or services.
            Your use of third-party services is subject to their own terms and
            privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            11. Website Availability
          </h2>
          <p className="leading-7">
            We aim to keep the Website available and accurate; however, we do
            not guarantee uninterrupted, error-free, secure, or always-available
            access.
          </p>
          <p className="leading-7">
            We may update, suspend, restrict, or discontinue any part of the
            Website for maintenance, security, operational, or business reasons.
            We will take reasonable steps to minimise disruption where
            practical.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            12. Disclaimers
          </h2>
          <p className="leading-7">
            To the maximum extent permitted by applicable law:
          </p>
          <ul className="list-disc space-y-2 pl-6 leading-7 marker:text-slate-400">
            <li>
              Website content is provided on an “as is” and “as available”
              basis.
            </li>
            <li>
              ISAM GLOBAL does not guarantee that Website information is
              complete, current, or free from errors.
            </li>
            <li>
              Product features, specifications, availability, delivery
              timelines, and pricing may change before a written agreement is
              issued.
            </li>
            <li>
              Business results, cost savings, revenue, operational improvement,
              or performance outcomes depend on many factors and are not
              guaranteed unless expressly agreed in writing.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            13. Limitation of Liability
          </h2>
          <p className="leading-7">
            To the maximum extent permitted by law, ISAM GLOBAL will not be
            liable for any indirect, incidental, special, consequential, or
            loss-of-profit damages arising from use of, or inability to use, the
            Website.
          </p>
          <p className="leading-7">
            Where liability cannot be excluded, ISAM GLOBAL’s total liability
            relating to a paid service will be limited to the amount paid by the
            customer for that specific service during the three months
            immediately before the event giving rise to the claim.
          </p>
          <p className="leading-7">
            This clause does not limit liability for fraud, wilful misconduct,
            personal injury, or any liability that cannot be excluded under
            applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            14. Suspension or Termination
          </h2>
          <p className="leading-7">
            We may suspend or terminate Website access, accounts, demo access,
            or service access where reasonably necessary to protect our systems,
            enforce these Terms, prevent misuse, address non-payment, comply
            with law, or protect the rights of ISAM GLOBAL, its customers, or
            third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            15. Changes to These Terms
          </h2>
          <p className="leading-7">
            We may update these Terms from time to time. The revised version
            will be posted on this page with an updated effective date.
          </p>
          <p className="leading-7">
            Material changes will apply prospectively and will not alter
            existing signed agreements unless agreed in writing or required by
            law. Continued use of the Website after the updated Terms are
            published means that you accept the revised Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            16. Governing Law and Jurisdiction
          </h2>
          <p className="leading-7">
            These Terms are governed by the laws of the United Arab Emirates.
            Any dispute arising from these Terms or the Website shall be subject
            to the jurisdiction of the competent courts of Sharjah, UAE, unless
            mandatory applicable law provides otherwise.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            17. Contact and Complaints
          </h2>
          <p className="leading-7">
            For questions, concerns, or complaints regarding these Terms or the
            Website, please contact:
          </p>
          <address className="rounded-xl border border-slate-200 bg-slate-50 p-5 leading-7 not-italic">
            <p className="font-semibold text-slate-900">ISAM GLOBAL</p>
            <p>Sharjah, United Arab Emirates</p>
            <p>
              Email:{" "}
              <Link
                href="mailto:info@isamglobal.com"
                className="text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
              >
                info@isamglobal.com
              </Link>
            </p>
          </address>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            18. Entire Agreement
          </h2>
          <p className="leading-7">
            These Terms, together with our Privacy Policy and any applicable
            written agreement, form the complete understanding between you and
            ISAM GLOBAL regarding use of the Website. If any provision is found
            invalid or unenforceable, the remaining provisions will continue in
            effect.
          </p>
        </section>
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© ISAM GLOBAL. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default TCPage
