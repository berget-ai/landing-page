import { motion } from 'framer-motion'
import { Shield, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
                At Berget AI, we take security seriously. We appreciate the work of security researchers and the wider community in helping us maintain a secure platform for all our users.
              </p>

              <h2>Reporting a Vulnerability</h2>
              <p>
                If you believe you've found a security vulnerability in our services or products, we encourage you to notify us. We welcome working with you to resolve the issue promptly.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
                <h3 className="flex items-center gap-2 text-xl mb-4">
                  <Mail className="w-5 h-5 text-[#52B788]" />
                  Contact Information
                </h3>
                <p>Please send your findings to: <strong>abuse-reporting@berget.ai</strong></p>
                <p>For encrypted communication, you can use our PGP key:</p>
                <div className="bg-black/30 p-4 rounded-md overflow-x-auto my-4">
                  <pre className="text-sm text-white/80">
                    {`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGX0KfYBEADJhyHhvOv5VH4D7EoLQAKEJzJJqGxTCZ+JBIl0FEYyOlUR
Yx+JVaWE7uGwcnZKOIZ2ZCvTEjFUPgDNfgFzYeXu6ajUJuHlKRWXlKFmEQYS
LhLcYBYljNnR2TVdxMhWEJqxuWcMCKrd0Y7qj9GRpD8GyM6IoGIXXUQKQeOj
eHUdKhpvkBUVWgpLqv3ezVVZlJOqVjqGrHEkQ9ER5QXQ1MIpPGIZZtZFYkLl
Ky6nOG6HzaMPOl+xn5/cCwQ/D9Jl/K9Kku3YvPi3GdRlVz+Z5ER4FhZyoGvL
Hn3u/Rvj9V9U9ghTKQvloKmC9GwZRVKcUDrEZhFZCFxwKWXaH4qTiagRMzHQ
QChjXL0Qc1EJcOLgDnKMQ8bScnKSdYxRl8XDTQlRdAJC0YUBsYTgzT1UEQzK
3cKJR8rOGjt2c8Xj4xMH9gxMQHEiMwEc/GF+Feh4wGvyDXIvmJGQbvw3OZrL
YBLgVjWGWHECi3QhMpZEEIy7JPvmjHFOyVHQJRUYhxFZPCj0SzEFj5KcJ0C8
sJEQTsQDzDKPFXmRLzUmFJbMJJ+WYOXyMtW8C9hfIUEA3h9S5ZLUdFFgAXgx
SWQgYnLs/6nVYZ5yrqbUVQYuZYYiIxHZ2kVxJXcvzXRYcTUBLNxXcQARAQAB
tCpCZXJnZXQgQUkgU2VjdXJpdHkgPGFidXNlLXJlcG9ydGluZ0BiZXJnZXQu
YWk+iQJOBBMBCgA4FiEEYQsIEA0XRWl8VFQtuh5rTFV8JFsFAmX0KfYCGwMF
CwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQuh5rTFV8JFvxQA//Ry+RyWnE
Ck2EQlgLYGQYXQHcKDpZbCRL8fA+wZmvsfkuSplHhvNdMhiDTHw/B5E8NHRs
Pu+wWdSM8SYnGYKgOC6JYRcvTjEtZ8wEVeYEDk9g8D/KXc3jQRTKQIinXnmP
Gy9fWPGOUVPzQmXCS8gXS4dNB8BxCpL4J/Z0OGrGbH/MyyFs1AKP/Tzwxgxj
Ij9OLVpYbZ8K5B0w6MLZKgGq8h1kQJV5R5GXaO0NIxjQcbKKgYzYP/gKcnhK
pQPKWYYXGmO8JiCqHQZUBFZL8x9UBQRpUkxwUNGacnxXbLmOEJKJkV9EEGZh
Pu2bLmYaZUvBFhTR4i9GQNuCFiNrOZbOIHRJTtQdlCiT6K4wkPTyQWCvCxwQ
Iy9KL5IpVQcUgHYUujYLKr8GEI/9u/cXNYVfXvmFGYdG1cYrwFKvxQDcGxNK
ixLzwgQNHdYJYgtUKxYEpAmUlQzHMCGMHyCMeBKpvpXO9wKiVBWT9ZzRvVAl
Vy9Q9ctoVbDcFKGGYYD+PAQMGNgLXEgVt4hZZkGYQCgbkTUFZiKGcVvwFHMO
3CyGbPQxHvhCxwwgXJtFsJeKQXYYKUeKbIAXlQYLUk8/+zyWgZKRXW4mQNF5
+Ql9yvGRhGOHonHsrHJxpZLzlGBDYQEQCLnzLQG5Ag0EZfQp9gEQAMCxIXRz
hRqGixfKoVYHLmAQ7ZCNQJpw5OPmXU8eV1a0JcuMZFEGhGBYj9LCvOxUJzKF
3JMwYiyQqvcGhQ/HA7bFBH5HVA5G5sMUzjTGBnqRpmWnQPZbEMjHh8eXcwNO
Nh5lKcRYmC+0xVku7O+Cw4sPYBEfA8X4oCIXJGJlXVVGIz4aUXhQH9Kj1/QG
Ck9LdvgXKuFLAZQpEXiMxcIwhr9yFLt+YYpkoLsVJJwYUOLWBIZlhOQvd0+A
Gy3XtFHQZYYIQcEBIxP6uHUX1uiYZ9XCNHffB9OXYGr/fYfFjQzXJw5nVECO
aNUGQJLKGFmm8/iyR9cXpfPMqXMFABRGXmz9WTS6Dy9NQhBw5ywWm5KyXpXZ
Hy9qTbiJO8YzFoGOXvAY8XLZXfhm+NVG7iFKKnLRVFWLbK/I2FQpzSRgCR+E
Nh4JyZl9RVLhCQS6BKbIkdVFHXYh/I+IVsO4YXnRlGz9LKsh+HKHX8SnOCMx
QnOJBqQYDzMJQQRQZHBqQQFMt5B5fFDGnIPGTdlKcOAqA5kVI/PwKTSYbMUO
JVpYh+TuTKvZZYZFNbXABOmrOQEi5JrVxEHzGDK3HWgxcxLBPbE4TlFaSSjK
QHVL5Ykf9QYA9Yl5UrSQ8zCXCBXPABEBAAGJAjYEGAEKACAWIQRhCwgQDRdF
aXxUVC26HmtMVXwkWwUCZfQp9gIbDAAKCRC6HmtMVXwkW+iiD/9Fy9RNVS+j
Ij9/FHcmKlQF5OMuK8s5Fk5CyAUB5aAWOuYEZZmE1tf5VQJ5FnEYT9YYQgBJ
Rl8QsXVPxOqfeK9Rl4qYQlgUGKDPJe9jUQz9qwbA9NJcPi9fxaZJ5AKqnEb1
Gy2MZg5KFPmNfxVZJR5rDXWQHbGRCyztZ/FRi8cdZjGN5Bh1+o/rKBzGwHVx
sTRUX2gfP1ROjOUQHZE9Kf5cjyUOBJFEiWYYCbpgDFY0MeWUHR0gmCZYrAVm
8KoNYAhXrO/xTJJucjrAZEWTMFvYYwZVzjnD4LZhuo7n2dKEQPzw1MZO5o/8
QCpFpGnAdmT5jU8GZdh0QpUCLJYFHjPLKLUtXbYLTsQpzlLYxJdOxc0Cgw+o
BxUu2D5t+xYGJrTLQSLEFz9R/Jf9zEhF7zaOvxcGTIlgQkUVfJ2YEcjAEzYI
Fy1/FGxVeRTJkqI5+dzjxOQRQXq5G+qrGbxnFRrKDEGcQpUxoaFKgxvz1/Hs
Fy1/FGxVeRTJkqI5+dzjxOQRQXq5G+qrGbxnFRrKDEGcQpUxoaFKgxvz1/Hs
Fy1/FGxVeRTJkqI5+dzjxOQRQXq5G+qrGbxnFRrKDEGcQpUxoaFKgxvz1/Hs
Fy1/FGxVeRTJkqI5+dzjxOQRQXq5G+qrGbxnFRrKDEGcQpUxoaFKgxvz1/Hs
=Ixqm
-----END PGP PUBLIC KEY BLOCK-----`}
                  </pre>
                </div>
                <p>You can also reach us via Signal for secure communications:</p>
                <p>Signal number: <strong>+46 70 123 4567</strong></p>
              </div>

              <h2>Guidelines</h2>
              <ul>
                <li>Provide detailed information about the vulnerability, including the steps to reproduce it</li>
                <li>Include information about the environment in which the vulnerability was discovered</li>
                <li>Include any potential impact of the vulnerability</li>
                <li>Include any suggestions for mitigating or fixing the vulnerability</li>
              </ul>

              <h2>Our Commitment</h2>
              <p>When working with us, you can expect:</p>
              <ul>
                <li>A timely response to your report (typically within 48 hours)</li>
                <li>An open line of communication as we investigate</li>
                <li>Proper attribution if you wish to be credited for the discovery</li>
                <li>No legal action against you if you follow these guidelines</li>
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
              <p>The following are out of scope for our responsible disclosure program:</p>
              <ul>
                <li>Denial of Service attacks</li>
                <li>Spam or social engineering attacks</li>
                <li>Physical security attacks</li>
                <li>Issues in third-party applications or services that we use but do not control</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
                <h3 className="flex items-center gap-2 text-xl mb-4">
                  <Lock className="w-5 h-5 text-[#52B788]" />
                  Safe Harbor
                </h3>
                <p>
                  We will not take legal action against you or initiate a complaint if you:
                </p>
                <ul>
                  <li>Act in good faith</li>
                  <li>Avoid privacy violations and destruction of data</li>
                  <li>Do not exploit the vulnerability beyond what is necessary to demonstrate the issue</li>
                  <li>Do not share information about the vulnerability with others until it has been resolved</li>
                </ul>
              </div>

              <h2>Thank You</h2>
              <p>
                Security is a community effort, and we greatly appreciate your help in keeping Berget AI and our users safe. Thank you for your contribution to our security.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
