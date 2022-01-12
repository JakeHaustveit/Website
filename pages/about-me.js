import Image from "next/image";
import '../styles/Home.module.css'

const AboutMe = () => {
    return (
        <div>
            <div >
            <Image  className="image" src={"/image1.png"} alt="Jake Picture" height={350} width={260} quality={100}  />

            </div>
            
            <h1>About me</h1>
                <p >
                    Here is a little about me. I am a recent graduate of a coding bootcamp
                    <a href="https://devcodecamp.com/veterans-gi-bill-approved-coding-bootcamp/?utm_term=&utm_campaign=Veterans&utm_source=adwords&utm_medium=ppc&hsa_acc=6852222338&hsa_cam=11849200768&hsa_grp=118014378878&hsa_ad=523426483651&hsa_src=g&hsa_tgt=dsa-1249152607437&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiAz--OBhBIEiwAG1rIOpTn3xH4TiL4Kd54UqHbc59I_WAdWzWfAO-qlYhNYcoUdxwuz7PLhxoCp5oQAvD_BwE">, devCodeCamp
                    </a>, where I spent 14 weeks learning Full Stack Development. Before that I spent 7 years in the Coast Guard as an Electrician's Mate. One of the coolest things that I got to do while
                    I was in the Coast Guard was swim in Arctic Circle.
                </p>
        </div>  );
}
 
export default AboutMe;
