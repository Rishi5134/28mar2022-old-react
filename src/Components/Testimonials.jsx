import React from 'react';
import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.jpg';
import p4 from '../Images/p4.jpg';

const Testimonials = () => {

  return (
  <>
  <div class='d-flex text-white text-warning justify-content-center align-items-center'>
            <h2 class="service-text-color mt-3">TESTIMONIALS</h2>
        </div>
        <section class="testim" id="testim">
            <div class="wrap">

                <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
                <span id="left-arrow" class="arrow left fa fa-chevron-left"></span>

                <ul class="dots" id="testim-dots">
                    <li class="dot active"></li>
                    <li class="dot"></li>
                    <li class="dot"></li>
                    <li class="dot"></li>

                </ul>

                <div class="cont" id="testim-content">

                    <div class="active">
                        <div class="img"><img src={p1} alt='' /></div>
                        <h2>DR. HARSHIT KAPADIA , Feng Shui column writer in Mumbai Samachar</h2>
                        <p>
                            This revolutionary concept of Dr. Bhatt has changed my thinking out right and my fame and
                            prosperity has flourished beyond my imagination.
                        </p>
                    </div>

                    <div>
                        <div class="img"><img src={p2} alt='' /></div>
                        <h2>Crown Summit Bagpack Engineer & PyraVastu expert - USA</h2>
                        <p>
                            Learning and exploring new ways with PyraNet is really a marvelous experience. After this I
                            am blessed by all round success
                        </p>
                    </div>

                    <div>
                        <div class="img"><img src={p3} alt='' /></div>
                        <h2>Joust Duffle Bag , Vastu expert and Alternative therapist</h2>
                        <p>
                            Being from a small village I had many doubts about this system. But today I can confidently
                            say, PyraVastu works like miracle.
                        </p>
                    </div>

                    <div>
                        <div class="img"><img src={p4} alt='' /></div>
                        <h2>Voyage Yoga Bag, Businessman from Ahmedabad,India</h2>
                        <p>
                            After I met Guruji Dr. Bhatt, I changed my business and started practicing PyraVastu. I
                            enlighten my relatives to do the same
                        </p>
                    </div>

                </div>

            </div>
        </section>

  </>
  )
}

export default Testimonials