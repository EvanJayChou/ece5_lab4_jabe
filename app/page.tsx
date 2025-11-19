import Image from "next/image";

export default function Home() {
  return (
    <main className="centered-page">
      <header style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.75rem'}}>
        <h1 style={{margin:0,fontSize:'clamp(2rem,5vw,3rem)'}}>Jabe Lab 4 Project Overview</h1>
        <p style={{maxWidth:640,margin:0,lineHeight:1.45}}>A concise summary of our robotics build, iteration, and control approach including PID tuning strategies across track variants.</p>
      </header>

      <section id="team" className="content-block">
        <h2>Team Info</h2>
        <p><strong>Team Number:</strong> <span>24</span></p>
        <p><strong>Team Name:</strong> <span>Jabe</span></p>
        <p><strong>Members:</strong> <span>Bruce Jimenez, Jonathan La, Evan Chou, Aaron Lee</span></p>
      </section>

      <section id="robot-build" className="content-block">
        <h2>Robot Building (Ch. 1-2)</h2>
        <p>Summary of foundational build steps: frame construction, drivetrain selection, sensor mounting, and initial wiring. Replace this placeholder text with your actual Chapter 1-2 submission highlights.</p>
        <div className="grid-images">
          <figure>
            <Image src="./Robot_Assemble.jpg" alt="Early Frame" width={300} height={200} />
            <figcaption>Initial robot assemble with breadboards and wiring.</figcaption>
          </figure>
        </div>
      </section>
      {/**
      <section id="prototyping" className="content-block">
        <h2>Prototyping Parts / Assembly</h2>
        <p>Describe iterations of key subsystems (e.g., gripper, shooter, sensor brackets). Mention material choices and why certain prototypes were kept or discarded.</p>
        <div className="grid-images">
          <figure>
            <Image src="/file.svg" alt="Prototype Part" width={300} height={200} />
            <figcaption>Prototype component sample.</figcaption>
          </figure>
          <figure>
            <Image src="/next.svg" alt="Assembly Stage" width={300} height={200} />
            <figcaption>Assembly refinement.</figcaption>
          </figure>
        </div>
      </section>

      <section id="final-robot" className="content-block">
        <h2>Final Competition Robot</h2>
        <p>Updated photos of the completed robot with annotations highlighting functional features.</p>
        <div className="annotated-wrapper">
          <Image src="/vercel.svg" alt="Final Robot" width={680} height={380} />
          <span className="annotation top-left" style={{transform:'rotate(0deg)'}}>Drive Motors</span>
          <span className="annotation top-right" style={{transform:'rotate(0deg)'}}>Sensor Array</span>
          <span className="annotation bottom-left" style={{transform:'rotate(0deg)'}}>Battery Pack</span>
          <span className="annotation bottom-right" style={{transform:'rotate(0deg)'}}>Controller Hub</span>
        </div>
      </section>

      <section id="pid-explanation" className="content-block">
        <h2>PID Control Explanation</h2>
        <p>PID (Proportional-Integral-Derivative) control combines three terms:</p>
        <ul style={{textAlign:'left',maxWidth:640,margin:'0 auto'}}>
          <li><strong>P</strong>: Reacts to present error (large P speeds correction but can overshoot).</li>
          <li><strong>I</strong>: Accumulates past error to eliminate steady-state offset.</li>
          <li><strong>D</strong>: Predicts future trend damping oscillations.</li>
        </ul>
        <p>We tuned by starting with P until oscillations appeared, adding D to dampen, then introducing a small I term to remove residual error after several cycles.</p>
      </section>

      <section id="pid-values" className="content-block">
        <h2>Chosen PID Values & Rationale</h2>
        <p><strong>Example:</strong> P=0.8, I=0.02, D=0.15 (replace with actual numbers). P provided fast convergence, D controlled overshoot, I removed a small bias from mechanical friction.</p>
  <p>Explain trade-offs: increasing P beyond 0.9 caused oscillations; higher D &gt; 0.25 introduced sluggish response; I above 0.05 created slow drift.</p>
      </section>

      <section id="track-adjustments" className="content-block">
        <h2>Speed & PID Adjustments Across Tracks</h2>
        <p>Detail how surface changes (e.g., smooth vs carpet) and curvature density required different max speed scaling and PID tweaks.</p>
        <ul style={{textAlign:'left',maxWidth:640,margin:'0 auto'}}>
          <li><strong>Straight / High Grip:</strong> Higher P (0.85) and speed cap 100%. D reduced slightly.</li>
          <li><strong>Curved / Low Grip:</strong> Lower P (0.6), increased D (0.2) for stability, speed cap 70%.</li>
          <li><strong>Mixed:</strong> Adaptive scaling: dynamic P interpolation based on curvature metric.</li>
        </ul>
        <p>Add any sensor fusion or feedforward terms used.</p>
      </section>
*/}
      <footer style={{fontSize:'0.75rem',opacity:0.7,textAlign:'center'}}>
        <p style={{margin:0}}>© {new Date().getFullYear()} UC San Diego • ECE 5 - Introduction to Electrical Engineering</p>
      </footer>
    </main>
  );
}
