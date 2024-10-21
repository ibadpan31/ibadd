import foto from "../Ibad.jpeg";

export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-blue-500 font-bold">CV Online</h1>
      <h2 className= "text-3xl">Ibadina Nur Islam</h2>
      <Profile />
      <p>
        Saya adalah seorang Web Developer, IT Trainer, dan juga Hobbies Farmer . Cita-cita saya ingin mrnjadi programmer internasional. Saya juga ingin masuk syurga tanpa hisab sekeluarga.
      </p>
      </div>
    );
}

function Profile() {
    return (
      <img
        src={foto.src}
        alt="Ibadina Nur Islam"
        className="fotoku" 
      />
    );
  }