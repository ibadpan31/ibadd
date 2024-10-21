export default function RowRiwayat(props:any){
    return (
        <div className="border-2 border-cyan-300 bg-pink-200 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-3">{props.jenjang}</div>
                    <div className="col-span-12 md:col-span-3">{props.sekolah}</div>
                    <div className="col-span-12 md:col-span-3">{props.tahun}</div>
                    <div className="col-span-12 md:col-span-3">{props.tahunbekerja}</div>
                    <div className="col-span-12 md:col-span-3">{props.intansi}</div>
                    <div className="col-span-12 md:col-span-3">{props.bekerjasebagai}</div>
                </div>
            </div>
        </div>
    
    );
}