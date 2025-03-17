import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
  }

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium mb-2">Create your account</h1>
            <p className="text-white/60">
              Start building secure AI applications with Berget
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 rounded-2xl border border-border bg-background/20 backdrop-blur-sm space-y-6">
              {/* Security Notice */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-white/80">
                  Your data never leaves our EU-based infrastructure
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to Berget's{' '}
                    <Link to="/terms" className="text-blue-400 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full group" size="lg">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="text-center text-sm text-white/60">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-400 hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
