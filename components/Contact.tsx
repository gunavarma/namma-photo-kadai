import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#F5F5F0] text-luxury-black relative">
       <div className="max-w-4xl mx-auto px-6">
         
         <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's Create Together</h2>
            <p className="font-sans text-stone-500 font-light">Available for commissions worldwide.</p>
         </div>

         <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                    <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-lg font-serif outline-none focus:border-luxury-gold transition-colors placeholder-transparent peer" 
                        placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-3 text-stone-400 font-sans text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-luxury-gold peer-valid:-top-4 peer-valid:text-xs">
                        Your Name
                    </label>
                </div>

                <div className="relative group">
                    <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-lg font-serif outline-none focus:border-luxury-gold transition-colors placeholder-transparent peer" 
                        placeholder="Email"
                    />
                     <label htmlFor="email" className="absolute left-0 top-3 text-stone-400 font-sans text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-luxury-gold peer-valid:-top-4 peer-valid:text-xs">
                        Email Address
                    </label>
                </div>
            </div>

            <div className="relative group">
                 <select className="w-full bg-transparent border-b border-stone-300 py-3 text-lg font-serif outline-none focus:border-luxury-gold transition-colors text-stone-600">
                    <option value="" disabled selected>Select Inquiry Type</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                 </select>
            </div>

            <div className="relative group">
                <textarea 
                    id="message" 
                    rows={1}
                    className="w-full bg-transparent border-b border-stone-300 py-3 text-lg font-serif outline-none focus:border-luxury-gold transition-colors placeholder-transparent peer resize-none" 
                    placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-stone-400 font-sans text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-luxury-gold peer-valid:-top-4 peer-valid:text-xs">
                    Tell us about your vision
                </label>
            </div>

            <div className="text-center pt-8">
                <button type="submit" className="bg-luxury-black text-white px-12 py-4 uppercase tracking-[0.2em] text-xs hover:bg-luxury-gold transition-colors duration-500">
                    Send Inquiry
                </button>
            </div>
         </form>

       </div>
    </section>
  );
};

export default Contact;