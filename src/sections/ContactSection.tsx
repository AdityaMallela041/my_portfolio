import { useRef, useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/AdityaMallela041' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-mallela-055809258' },
  { icon: Mail, label: 'Email', href: 'mailto:adityamallela041@gmail.com' },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 z-[70]"
      style={{ background: '#0B1022' }}
    >
      <div
        className={`glass-card mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          width: 'min(90vw, 1000px)',
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Info */}
          <div
            className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10"
          >
            <h2
              className={`font-heading font-semibold text-slate-primary mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.01em', lineHeight: 1.05 }}
            >
              Let's Connect
            </h2>

            <p 
              className={`text-slate-secondary text-base lg:text-lg mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Have a project in mind or want to collaborate? I'm always open to discussing 
              new opportunities, creative ideas, or just having a chat about AI/ML and tech.
            </p>

            <div 
              className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-indigo/20 flex items-center justify-center">
                <Mail size={18} className="text-indigo" />
              </div>
              <a 
                href="mailto:adityamallela041@gmail.com" 
                className="text-slate-primary hover:text-indigo transition-colors"
              >
                adityamallela041@gmail.com
              </a>
            </div>

            <div 
              className={`flex gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-secondary hover:text-indigo hover:bg-indigo/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            className={`flex-1 p-8 lg:p-12 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo/20 flex items-center justify-center mb-4">
                  <Send size={24} className="text-indigo" />
                </div>
                <h3 className="font-heading font-semibold text-slate-primary text-xl mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-secondary">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-secondary text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-slate-primary placeholder:text-slate-secondary/50 focus:border-indigo focus:ring-indigo/20"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-secondary text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-slate-primary placeholder:text-slate-secondary/50 focus:border-indigo focus:ring-indigo/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-secondary text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/5 border-white/10 text-slate-primary placeholder:text-slate-secondary/50 focus:border-indigo focus:ring-indigo/20 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 px-4">
        <p className="font-mono text-xs tracking-[0.12em] uppercase text-slate-secondary/50">
          © 2026 MSV Aditya Phani Kumar. All rights reserved.
        </p>
      </div>
    </section>
  );
}
