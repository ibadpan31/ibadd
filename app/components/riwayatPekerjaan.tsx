import RowRiwayat from "./RowRiwayat";

export default function RiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text center pt-20">
        <h2 className="text-2xl"> Riwayat Pekerjaan</h2>
      </div>
      <RowRiwayat tahunbekerja="2027" intansi="PT Panpan Sejahtera" bekerjasebagai="IT Engineer"/>
      <RowRiwayat tahunbekerja="2028" intansi="PT Prancis Sujaya" bekerjasebagai="Admin"/>
      <RowRiwayat tahunbekerja="2029" intansi="PT Sayonara" bekerjasebagai="Robot Engineer"/>
      <RowRiwayat tahunbekerja="2030" intansi="PT Pakaliman" bekerjasebagai="Software Developer"/>
        </div>
        
    );
}