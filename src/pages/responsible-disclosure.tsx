import { motion } from 'framer-motion'
import { Shield, Mail, Lock } from 'lucide-react'

export default function ResponsibleDisclosurePage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#52B788]" />
              </div>
              <h1 className="text-4xl font-ovo">Responsible Disclosure</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                At Berget AI, we take security seriously. We appreciate the work
                of security researchers and the wider community in helping us
                maintain a secure platform for all our users.
              </p>

              <h2>Reporting a Vulnerability</h2>
              <p>
                If you believe you've found a security vulnerability in our
                services or products, we encourage you to notify us. We welcome
                working with you to resolve the issue promptly.
              </p>

              <h2>Reporting via GitHub</h2>
              <p>
                If you have found a vulnerability in one of our public GitHub repositories, 
                you can report it privately using GitHub's built-in security advisory system:
              </p>
              
              <div className="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
                <h3 className="flex items-center gap-2 text-xl mb-4">
                  <Shield className="w-5 h-5 text-[#52B788]" />
                  GitHub Private Vulnerability Reporting
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-white/80">
                  <li>Navigate to the main page of the affected repository on GitHub</li>
                  <li>Click on the <strong>"Security"</strong> tab</li>
                  <li>Click <strong>"Report a vulnerability"</strong> to open the advisory form</li>
                  <li>Fill in the vulnerability details including:
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Title and description of the vulnerability</li>
                      <li>Steps to reproduce the issue</li>
                      <li>Potential impact assessment</li>
                      <li>Suggested mitigation or fix (if available)</li>
                    </ul>
                  </li>
                  <li>Click <strong>"Submit report"</strong></li>
                </ol>
                <p className="mt-4 text-sm text-white/60">
                  This process is completely private and GitHub will notify our security team directly. 
                  You'll automatically be added as a collaborator on the security advisory.
                </p>
              </div>

              <h2>Direct Contact</h2>
              <p>
                For vulnerabilities that cannot be reported through GitHub, or for general security concerns:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
                <h3 className="flex items-center gap-2 text-xl mb-4">
                  <Mail className="w-5 h-5 text-[#52B788]" />
                  Contact Information
                </h3>
                <p>
                  Please send your findings to:{' '}
                  <strong>
                    <a href="mailto:abuse-reporting@berget.ai">
                      abuse-reporting@berget.ai
                    </a>
                  </strong>
                </p>
                <p>For encrypted communication, you can use our PGP key:</p>
                <div className="bg-black/30 p-4 rounded-md overflow-x-auto my-4">
                  <pre className="text-sm text-white/80">
                    {`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
lHM=
=FRTJ
-----END PGP PUBLIC KEY BLOCK-----

`}
                  </pre>
                </div>
                <p>
                  You can also reach us via Signal for secure communications:
                </p>
                <p>
                  Signal number: <strong>+46 70 775 58 31</strong>
                </p>
              </div>

              <h2>Guidelines</h2>
              <ul>
                <li>
                  Provide detailed information about the vulnerability,
                  including the steps to reproduce it
                </li>
                <li>
                  Include information about the environment in which the
                  vulnerability was discovered
                </li>
                <li>Include any potential impact of the vulnerability</li>
                <li>
                  Include any suggestions for mitigating or fixing the
                  vulnerability
                </li>
              </ul>

              <h2>Our Commitment</h2>
              <p>When working with us, you can expect:</p>
              <ul>
                <li>
                  A timely response to your report (typically within 48 hours)
                </li>
                <li>An open line of communication as we investigate</li>
                <li>
                  Proper attribution if you wish to be credited for the
                  discovery
                </li>
                <li>
                  No legal action against you if you follow these guidelines
                </li>
              </ul>

              <h2>Scope</h2>
              <p>This policy applies to all Berget AI services, including:</p>
              <ul>
                <li>Our website (berget.ai)</li>
                <li>Our API services</li>
                <li>Our cloud infrastructure</li>
                <li>Our client applications</li>
              </ul>

              <h2>Out of Scope</h2>
              <p>
                The following are out of scope for our responsible disclosure
                program:
              </p>
              <ul>
                <li>Denial of Service attacks</li>
                <li>Spam or social engineering attacks</li>
                <li>Physical security attacks</li>
                <li>
                  Issues in third-party applications or services that we use but
                  do not control
                </li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
                <h3 className="flex items-center gap-2 text-xl mb-4">
                  <Lock className="w-5 h-5 text-[#52B788]" />
                  Safe Harbor
                </h3>
                <p>
                  We will not take legal action against you or initiate a
                  complaint if you:
                </p>
                <ul>
                  <li>Act in good faith</li>
                  <li>Avoid privacy violations and destruction of data</li>
                  <li>
                    Do not exploit the vulnerability beyond what is necessary to
                    demonstrate the issue
                  </li>
                  <li>
                    Do not share information about the vulnerability with others
                    until it has been resolved
                  </li>
                </ul>
              </div>

              <h2>Thank You</h2>
              <p>
                Security is a community effort, and we greatly appreciate your
                help in keeping Berget AI and our users safe. Thank you for your
                contribution to our security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
