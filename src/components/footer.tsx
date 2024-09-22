import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-3 leading-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 leading-3 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FraudGuard. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="/terms" className="text-xs leading-3 text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs leading-3 text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs leading-3 text-gray-600 hover:text-gray-900">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
