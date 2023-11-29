import React from "react";
import { Image } from "primereact/image";
import banner4 from "../../assets/images/banner2.svg"


function Banner() {
    return (
        <div className="pt-24 pb-20">
            <div className="bg-gradient-to-r from-purple4 to-purple2 w-full h-10 mt-6 sm:h-20 md:h-20 lg:h-28 sm:mt-6 md:mt-6 lg:mt-12 xl:mt-16"></div>
            <div className="flex justify-center -mt-14 sm:-mt-24 md:-mt-30 lg:-mt-36">
                <Image src={banner4} alt="img_banner" className=" pl-4 flex items-center pr-4 sm:w-12/12 sm:mx-auto md:w-11/12 md:mx-auto lg:w-11/12 lg:mx-auto xl:max-w-screen-xl xl:mx-auto 2xl:max-w-screen-xl 2xl:mx-auto" />
            </div>
            <div className="text-center pt-16 font-poppins">
                <h3 className="text-lg">Dinas Komunikasi dan Informatika (Diskominfo) Kabupaten Lamongan adalah salah satu unit kerja yang ada di bawah instansi
                Pemerintah Kabupaten Lamongan. Berdasarkan Peraturan Daerah Kabupaten Lamongan Nomor 11 Tahun 2021 tentang Perubahan Kedua
                Atas Peraturan Daerah Nomor 5 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Kabupaten Lamongan,
                Diskominfo Kabupaten Lamongan menyelenggarakan urusan pemerintahan bidang komunikasi dan informatika serta
                bidang persandian dan statistik. Berdasarkan Peraturan Bupati Lamongan Nomor 79 Tahun 2021 tentang Kedudukan, Susunan Organisasi,
                Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi dan Informatika Kabupaten Lamongan, Diskominfo Kabupaten Lamongan merupakan unsur
                pelaksana urusan pemerintahan daerah di bidang komunikasi dan informatika serta persandian dan statistik.
                Diskominfo Kabupaten Lamongan dipimpin oleh seorang Kepala Dinas yang berada di bawah dan bertanggung jawab kepada Bupati
                melalui Sekretaris Daerah.</h3>
            </div>
            <div></div>
        </div>
    )
}

export default Banner;