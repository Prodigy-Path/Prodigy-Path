/** @format */

import React from 'react';
import lewis from '../../images/selfie-lewis.png';
import seth from '../../images/seth.jpg';
import elias from '../../images/selfie-elias.png';
export default function DevsAbout() {
  return (
    <article className='about'>
      <section className='about__team'>

      <h2>Meet the Minds Behind Prodigy Path</h2>
      <p >
        Our team consists of four experienced and driven individuals, each with
        their own unique background and skill-set.
        <div>Get to know us below:</div>
      </p>
      </section>
      <section>
        <div>
          <h3>Seth Pierce</h3>
          <img src={seth} alt='Seth' />
        </div>
        <p>
          I am a full-stack JavaScript software developer with a background in
          diesel vehicle maintenance and ammo technician work in the Marine
          Corps. I am always looking to improve and learn new tools, and I am
          eager to bring my skills to your project.
        </p>
      </section>
      <section>
        <div>
          <h3>Lewis Benson</h3>
          <img src={lewis} alt='Lewis' />
        </div>
        <p>
          As a full-stack developer with a diverse professional background,
          including experience in construction and oil and gas production, I
          bring a unique perspective to every project. I am proficient in a
          variety of technologies and am committed to delivering exceptional
          customer service and satisfaction. I am ready to work with you to
          bring your vision to life.
        </p>
      </section>
      <section>
        <div>
          <h3>Elias Staehle</h3>
          <img src={elias} alt='Elias' />
        </div>
        <p>
          With a background in machining and leading groups of people, as well
          as experience in teaching self defense and risk governance compliance,
          I bring a focus on detail and critical thinking to the team. I am
          ready to apply my skills to your project.
        </p>
      </section>
      <section>
        <div>
          <h3>Steven Rejdukowski</h3>
          <img
            src='https://fastly.picsum.photos/id/392/200/300.jpg?hmac=tcnub3WKREnSOdoCn7rQtfZkHXNWn5fXwNpHrv0o-5k'
            alt='Steven'
          />
        </div>
        <p>
          I bring 7 years of eCommerce management experience to the table, along
          with my recent full-stack JavaScript development certification from
          Code Fellows. I am eager to start my career as a full-stack developer
          and bring my skills to your project.
        </p>
      </section>
    </article>
  );
}
