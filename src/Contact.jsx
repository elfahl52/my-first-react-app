import React from 'react'
import './Contact.css'
// 1. استيراد الأيقونات من المكتبات المختلفة
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'; // أيقونة إرسال أنيقة

function Contact() {
  return (
    <>
      <div className="contact" id="Contact">
        <h2>Contact Us</h2>
        <div className="container">
          
          {/* قسم الفورم */}
          <div className="left">
            <form action="#">
              
              {/* حقل الاسم مع أيقونة */}
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Your Name" />
              </div>

              {/* حقل الإيميل مع أيقونة */}
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Your Email" />
              </div>

              {/* حقل التليفون مع أيقونة */}
              <div className="input-group">
                <FaPhone className="input-icon" />
                <input type="number" placeholder="Your Phone" />
              </div>

              {/* حقل الرسالة */}
              <div className="input-group">
                <FaPaperPlane className="input-icon" style={{marginTop: '12px'}} />
                <textarea placeholder="Your Message"></textarea>
              </div>

              {/* زرار الإرسال */}
              <button type="submit" className="submit-btn">
                Send Message <FiSend style={{marginLeft: '8px'}} />
              </button>

            </form>
          </div>

          {/* قسم معلومات التواصل */}
          <div className="right">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Main Street</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Anytown, USA 12345</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>(123) 456-7890</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>info@company.com</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact