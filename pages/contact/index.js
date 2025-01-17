import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONTACT_US_PAGE } from '@/text';

const ContactForm = () => {
  const { H1_HEADING, PARAGRAPH, FORM_DETAILS } = CONTACT_US_PAGE;
  const { fields, submitButton, details, services, budgetRanges } = FORM_DETAILS;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    selectedServices: [],
  });
  const [load, setLoad] = useState(false);

  const handleInputChange = (e, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleBudgetChange = (budget) => {
    setFormData((prevData) => ({
      ...prevData,
      budget,
    }));
  };

  const handleServiceSelection = (serviceName) => {
    setFormData((prevData) => {
      const isSelected = prevData.selectedServices.includes(serviceName);
      return {
        ...prevData,
        selectedServices: isSelected
          ? prevData.selectedServices.filter((name) => name !== serviceName)
          : [...prevData.selectedServices, serviceName],
      };
    });
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      toast.error('Please fill all required fields!');
      return;
    }
  
    try {
      setLoad(true);
      // Change URL to include the backend server's URL if necessary
      const response = await fetch('http://localhost:5000/contacts', { // Updated URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', budget: '', selectedServices: [] });
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Error submitting form');
    } finally {
      setLoad(false);
    }
  };
  
  

  return (
    <section className="flex flex-col md:flex-row mx-auto pt-12">
      {/* Left Section */}
      <div className="md:w-[45%] space-y-6 pt-20">
        {details.map(({ icon, title, email, phone, address, description }, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Image src={icon} width={40} height={40} alt={title} className="rounded-lg border p-2 bg-secondary" />
            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-lg text-text_color_secondary block">{description}</p>
              {phone && (
                <p className="text-text_color_primary text-lg">
                  <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                  </a>
                </p>
              )}
              {address && (
                <span className="text-lg text-text_color_primary">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {address}
                  </a>
                </span>
              )}
              {email && (
                <span className="text-lg text-text_color_primary">
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="md:w-[55%] bg-secondary p-8 rounded-xl shadow-md space-y-6 mx-auto">
        <div>
        <h2 className="text-4xl font-bold text-text_color_primary">
            Got ideas? We&apos;ve got the skills. Let&apos;s team up.
                </h2>
               <p className="text-text_color_secondary mt-2">
                Tell us more about yourself and what you&apos;ve got in mind.
             </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => handleInputChange(e, field.name)}
                className="w-full px-3 py-2 bg-secondary border-b-2 border-[#333333]"
              />
            </div>
          ))}
          <div className="space-y-6">
            {/* Services Section */}
            <div>
              <p className="text-text_color_primary text-xl font-semibold mb-4 mt-10">Choose the services you&apos;d like assistance with?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleServiceSelection(service.name)}
                    >
                      <Image
                        src={
                          formData.selectedServices.includes(service.name)
                            ? '/assets/Images/home-page/checked.svg' 
                            : '/assets/Images/home-page/unchecked.svg'
                        }
                        alt="checkbox"
                        width={20}
                        height={20}
                      />
                    </div>
                    <label htmlFor={`service-${index}`} className="cursor-pointer text-lg">
                      {service.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-text_color_primary text-xl font-semibold mb-4 mt-10">Select a Budget Range?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {budgetRanges.map((budget, index) => (
                  <div
                    key={index}
                    className={`text-center py-2 px-3 border rounded-lg cursor-pointer ${
                      formData.budget === budget ? 'bg-gray-300' : 'bg-primary'
                    }`}
                    onClick={() => handleBudgetChange(budget)} 
                  >
                    {budget}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#333333] text-primary font-semibold rounded-lg hover:bg-gray-800"
          >
            {load ? 'Loading...' : submitButton.text}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
