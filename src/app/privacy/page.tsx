import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — AquaLens",
    description:
        "Privacy Policy for the AquaLens aquarium management app. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "4rem 1.5rem",
                color: "#e4e4e7",
                fontFamily: "system-ui, -apple-system, sans-serif",
                lineHeight: 1.8,
            }}
        >
            <a
                href="/"
                style={{
                    color: "#34d399",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-block",
                    marginBottom: "2rem",
                }}
            >
                ← Back to AquaLens
            </a>

            <h1
                style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    color: "#fff",
                }}
            >
                Privacy Policy
            </h1>
            <p style={{ color: "#71717a", marginBottom: "3rem" }}>
                <strong>Last updated:</strong> March 2026
            </p>

            <p>
                David Walker (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) built
                the AquaLens app as a Freemium app. This SERVICE is provided by David
                Walker at no cost and is intended for use as is.
            </p>
            <p>
                This page is used to inform visitors regarding our policies with the
                collection, use, and disclosure of Personal Information if anyone
                decided to use our Service.
            </p>
            <p>
                If you choose to use our Service, then you agree to the collection and
                use of information in relation to this policy. The Personal Information
                that we collect is used for providing and improving the Service. We will
                not use or share your information with anyone except as described in
                this Privacy Policy.
            </p>

            <h2 style={sectionHeading}>1. Information Collection and Use</h2>
            <p>
                For a better experience while using our Service, we may require you to
                provide us with certain personally identifiable information. The
                information that we request will be retained by us and used as described
                in this privacy policy.
            </p>
            <p>
                The app does use third-party services that may collect information used
                to identify you.
            </p>

            <h3 style={subHeading}>1.1 Camera and Photo Library Access</h3>
            <p>
                AquaLens requires access to your device&apos;s camera and photo library
                to function correctly. This is required for:
            </p>
            <ul style={listStyle}>
                <li>
                    Utilizing the Optical Character Recognition (OCR) features for water
                    parameter test kits.
                </li>
                <li>
                    Utilizing the AI computer vision scanning feature for identifying
                    aquatic species and plants.
                </li>
                <li>
                    Allowing you to capture and save images of your aquatic ecosystems to
                    your personal digital journal.
                </li>
                <li>
                    Allowing you to optionally upload screenshots of your tank to the
                    public Community Hub.
                </li>
            </ul>
            <p>
                Images processed by the AI scanner are temporarily sent to our backend
                servers to interact with our proprietary AI models to return
                identification results, but these initial scanning images are not
                permanently stored by us unless you explicitly choose to save them to
                your log or share them publicly.
            </p>

            <h3 style={subHeading}>1.2 User Accounts and Cloud Sync</h3>
            <p>
                AquaLens offers anonymous authentication by default to keep your local
                data organized on your device.
            </p>
            <p>
                If you subscribe to AquaLens Pro, we may collect and synchronize your
                tank parameters, logs, livestock lists, and wishlist data to our
                secured cloud servers (hosted by Firebase) to enable multi-device sync
                and data recovery. You may opt-out of cloud synchronization at any time
                within the &quot;App Settings&quot; menu, which will halt all data
                transmission and keep your records strictly local to your device.
            </p>

            <h3 style={subHeading}>1.3 Push Notifications</h3>
            <p>
                To provide timely reminders for aquarium maintenance (such as water
                changes, dosing schedules, and quarantine expirations), we collect and
                store a Firebase Cloud Messaging (FCM) token unique to your device.
                This token is used solely to deliver these scheduled reminders.
            </p>

            <h3 style={subHeading}>1.4 In-App Purchases</h3>
            <p>
                AquaLens offers premium subscriptions via RevenueCat. When you purchase
                a subscription, the transaction is processed directly through the Apple
                App Store or Google Play Store. We do not process, collect, or store
                your payment details directly (such as credit card numbers). We do,
                however, receive anonymous receipt tokens validating your purchase to
                unlock premium features within the app.
            </p>

            <h2 style={sectionHeading}>2. Third-Party Service Providers</h2>
            <p>
                We may employ third-party companies and individuals due to the
                following reasons:
            </p>
            <ul style={listStyle}>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
                We want to inform users of this Service that these third parties have
                access to your Personal Information to perform the tasks assigned to
                them on our behalf. However, they are obligated not to disclose or use
                the information for any other purpose.
            </p>
            <p>The app uses the following third-party services:</p>
            <ul style={listStyle}>
                <li>
                    <strong>Google Play Services &amp; Firebase:</strong> For
                    authentication, cloud database storage, cloud functions, and push
                    notifications.
                </li>
                <li>
                    <strong>Google Cloud:</strong> For powering the
                    computer-vision and AI features.
                </li>
                <li>
                    <strong>RevenueCat:</strong> For managing App Store subscription
                    statuses.
                </li>
            </ul>

            <h2 style={sectionHeading}>3. Security</h2>
            <p>
                We value your trust in providing us your Personal Information, thus we
                are striving to use commercially acceptable means of protecting it. But
                remember that no method of transmission over the internet, or method of
                electronic storage is 100% secure and reliable, and we cannot guarantee
                its absolute security.
            </p>

            <h2 style={sectionHeading}>4. Links to Other Sites</h2>
            <p>
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that these
                external sites are not operated by us. Therefore, we strongly advise
                you to review the Privacy Policy of these websites. We have no control
                over and assume no responsibility for the content, privacy policies, or
                practices of any third-party sites or services.
            </p>

            <h2 style={sectionHeading}>5. Children&apos;s Privacy</h2>
            <p>
                These Services do not address anyone under the age of 13. We do not
                knowingly collect personally identifiable information from children
                under 13 years of age. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete this
                from our servers. If you are a parent or guardian and you are aware that
                your child has provided us with personal information, please contact us
                so that we will be able to do the necessary actions.
            </p>

            <h2 style={sectionHeading}>6. Content Moderation</h2>
            <p>
                In the &quot;Community&quot; or &quot;Showcase&quot; features, users may
                voluntarily publish photos of their aquariums to a public feed. We
                utilize automated AI moderation tools to scan user-submitted media and
                text for inappropriate, offensive, or disallowed content prior to
                publishing. By submitting content to the public feed, you consent to
                this automated scanning process. We reserve the right to remove any
                content that violates our community standards or terms of service
                without prior notice.
            </p>

            <h2 style={sectionHeading}>7. Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. Thus, you are
                advised to review this page periodically for any changes. We will
                notify you of any changes by posting the new Privacy Policy on this
                page.
            </p>

            <h2 style={sectionHeading}>8. Contact Us</h2>
            <p>
                If you have any questions or suggestions about our Privacy Policy, do
                not hesitate to contact us at{" "}
                <a href="mailto:aqualensapp@gmail.com" style={{ color: "#34d399" }}>
                    aqualensapp@gmail.com
                </a>
                .
            </p>
        </div>
    );
}

const sectionHeading: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#fff",
    marginTop: "2.5rem",
    marginBottom: "1rem",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: "0.5rem",
};

const subHeading: React.CSSProperties = {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#d4d4d8",
    marginTop: "1.5rem",
    marginBottom: "0.75rem",
};

const listStyle: React.CSSProperties = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
};
