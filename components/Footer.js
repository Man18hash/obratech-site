export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} ObraTech. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://www.facebook.com/profile.php?id=100063835911210" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/company/109388961/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
