import React, { useState } from 'react';

const contacts = [
  {
    icon: '/assets/gmail.svg',
    title: 'E-mail',
    value: 'enqinsel@gmail.com',
    href: 'mailto:enqinsel@gmail.com',
  },
  {
    icon: '/assets/linkedin.svg',
    title: 'LinkedIn',
    value: 'linkedin.com/in/engininsel',
    href: 'https://linkedin.com/in/engininsel',
  },
  {
    icon: '/assets/github.svg',
    title: 'GitHub',
    value: 'github.com/enqinsel',
    href: 'https://github.com/enqinsel',
  },
  {
    icon: '/assets/behance.svg',
    title: 'Behance',
    value: 'behance.net/enqinsel',
    href: 'https://www.behance.net/enqinsel',
  },
  {
    icon: '/assets/youtube.svg',
    title: 'Youtube',
    value: 'youtube.com/@enginyazilim',
    href: 'https://www.youtube.com/@enginyazilim',
  },
];

const ContactInfo = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (value, index) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 3000);
    } catch (err) {
      console.error('Kopyalama başarısız:', err);
    }
  };

  return (
    <div className="space-y-10 mt-10 w-fit">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-4 group">
          <div>
            <img src={contact.icon} alt={contact.title} className="w-10 h-10" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{contact.title}</p>
            <div className="flex items-center space-x-2">
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:underline">
                {contact.value}
              </a>
              <button
                onClick={() => handleCopy(contact.value, index)}
                className="text-gray-400 hover:text-white transition"
                title="Kopyala">
                {copiedIndex === index ? (
                  <img src="assets/tick.svg" alt="Copy" className="w-5 h-5" />
                ) : (
                  <img src="assets/copy.svg" alt="Copy" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
