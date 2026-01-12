import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CCognitions</h3>
          <p className="text-gray-400">AI-Powered Software Development</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul>
            <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} CCognitions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
