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
        <div className="grid-images" style={{maxWidth:720}}>
          <figure>
            <Image src="./Group.jpg" alt="Team Group Photo" width={720} height={405} />
            <figcaption style={{color:'#000'}}>Team Jabe group photo.</figcaption>
          </figure>
        </div>
      </section>

      <section id="poster" className="content-block">
        <h2>Project Poster</h2>
        <p>Our final poster summarizing the robot design, build process, and PID control results.</p>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.75rem',width:'100%'}}>
          <Image src="./Poster.jpg" alt="Project Poster" width={900} height={600} />
        </div>
      </section>

      <section id="drag-race" className="content-block">
        <h2>Final Drag Race Video</h2>
        <p>Watch our robot sprint in the final drag race challenge.</p>
        <div style={{position:'relative',width:'100%',maxWidth:720,padding:'0',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.75rem'}}>
          <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',borderRadius:'12px',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.25)'}}>
            <iframe
              src="https://www.youtube.com/embed/XzrAroEFC3s"
              title="Final Drag Race"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}}
              allowFullScreen
            />
          </div>
        </div>
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

      <section id="video" className="content-block">
        <h2>Robot Following Line Video</h2>
        <p>A short video of our test robot following a circular line.</p>
        <div style={{position:'relative',width:'100%',maxWidth:720,padding:'0',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.75rem'}}>
          <div style={{position:'relative',width:'100%',paddingBottom:'56.25%',borderRadius:'12px',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.25)'}}>
            <iframe
              src="https://www.youtube.com/embed/AOaCGNmPx2k" /* Use standard embed URL; replace ID if different */
              title="Robot Following Line"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="final-robot" className="content-block">
        <h2>Final Competition Robot</h2>
        <p>Updated photos of the completed robot with annotations highlighting functional features.</p>
        <div className="annotated-wrapper">
          <Image src="./Final.jpg" alt="Final Robot" width={680} height={380} />
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
        <p>We tuned by starting with P until oscillations appeared, adding D to dampen, then introducing a small I term to remove residual error after several cycles. In general, we had similar PID values that worked for all tracks, with the exception of the drag race where we maximized speed.</p>
      </section>

      <section id="pid-values" className="content-block">
        <h2>Chosen PID Values</h2>
        <p><strong></strong> P=0.8, I=0.5, D=0.6 (replace with actual numbers). P provided fast convergence, D controlled overshoot, I removed a small bias from mechanical friction.</p>
  <p>Increasing P beyond 0.9 caused oscillations; higher D &gt; 0.25 introduced sluggish response; I above 0.05 created slow drift.</p>
        <div className="grid-images" style={{maxWidth:720}}>
          <figure>
            <Image src="./PID.jpg" alt="PID Values Chart" width={720} height={405} />
            <figcaption>PID tuning results and selected values.</figcaption>
          </figure>
        </div>
      </section>

      <section id="track-adjustments" className="content-block">
        <h2>Improvements</h2>
        <p>During the last week, we were able to diagnose a serious issue with the voltage input and the LED strip which we were planning to use within the light box of the robot. Instead, we resulted to using 3 LED lights for better voltage management. If we had the opportunity, we would've taken more time to PID tune before the competition, and have 3 separate code files of different nominal speeds to hopefully get much higher in the rankings.</p>
      </section>

      <section id="competition-scores" className="content-block">
        <h2>Competition Scores & Rankings</h2>
        <p>Here are the results from the competition, showcasing our performance across various challenges:</p>
        <table style={{width:'100%',maxWidth:720,borderCollapse:'collapse',margin:'0 auto',textAlign:'left'}}>
          <thead>
            <tr style={{background:'#f4f4f4',borderBottom:'2px solid #ddd',color:'#fff'}}>
              <th style={{padding:'8px'}}>Challenge</th>
              <th style={{padding:'8px'}}>Score</th>
              <th style={{padding:'8px'}}>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>Drag Race</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>0:57</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>15th</td>
            </tr>
            <tr>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>Freq Sweep</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>6.5</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>7th</td>
            </tr>
            <tr>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>Loop</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>25.07</td>
              <td style={{padding:'8px',borderBottom:'1px solid #ddd',color:'#fff'}}>5th</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer style={{fontSize:'0.75rem',opacity:0.7,textAlign:'center'}}>
        <p style={{margin:0}}>© {new Date().getFullYear()} UC San Diego • ECE 5 - Introduction to Electrical Engineering</p>
      </footer>
    </main>
  );
}
