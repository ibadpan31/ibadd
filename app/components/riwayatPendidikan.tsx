import RowRiwayat from "./RowRiwayat";

export default function RiwayatPendidikan(){
    return(
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text center pt-20">
        <h2 className="text-2xl"> Riwayat Pendidikan</h2>
      </div>
      <RowRiwayat jenjang="SD" sekolah="SDN 030 Cirateun" tahun="2009"/>
      <RowRiwayat jenjang="SMP" sekolah="SMPN 15 Bandung" tahun="2014"/>
      <RowRiwayat jenjang="SMK" sekolah="SMK Bina Wisata" tahun="2018"/>
      <RowRiwayat jenjang="Sarjana" sekolah="Ma'soem University" tahun="2009"/>
        </div>
        
    );
}