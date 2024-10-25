'use client'

import { useRouter } from "next/navigation";
import Button from '../components/Button'

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
  router.push('/contact')
}
  return (
    <div>
      <nav>
          <ul>
              <img id="logo" src="../public/images/michigan.png"></img>
              <li><a href="">About</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Sign Up</a></li>
          </ul>
      </nav>

      <div id="title">
      <h1> FindBlue.</h1>
      </div>
      <div id="aboutUs">
      <h1 id ="aboutTitle"> About</h1>
      <p>Our idea is not unique. Well, only if you think broadly. If you are looking for qualified people, 
        you use LinkedIn. If you want to find a co-founder for a startup, there are tons of platforms which you can do so.
         It is so easy that if you simply search “find a cofounder” in google, you get a page full of platforms that provide a similar service. 
         If we try to infiltrate this market, we’ll drown in competition and constantly struggle for time in the spotlight. 
         However, if you think more narrowly, our idea has the potential to have a monopoly on a giant market. 
         This market is aspiring college students who are dying to find projects and teams. 
         If we can get our project to be the number one platform that University of Michigan students use to start up an idea, 
         we’ll have a monopoly on THE public university in North America.</p>
      </div>
      <div id="footnote">
      <a href="">FAQ</a>
      <a href="">Contact Us</a>
      <a href="">Founders</a>
      </div>
    </div>
  );
}
