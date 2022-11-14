import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <React.Fragment>
        <div class="hero">
		<nav>
			<h2 class="logo">Muklas<span>ID</span></h2>
			<ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portofolio">Portofolio</Link></li>
				<li><Link to="/article">Article</Link></li>
			</ul>
		</nav>

		<div class="content">
			<h4><span>Hai,</span> Nama saya</h4>
			<h1>Muklas <span>Isa Dewa</span></h1>
			<h3>Saya Seorang Front-End Web Developer</h3>
		</div>
	</div>

    <section class="about">
		<div class="main">
			<div class="about-text">
				<h2>Biodata <span>Diri</span></h2>

                <table class="tampilbio" cellpadding="0" cellspacing="3" border="0">
					<tbody>
					<tr>
						<td><span>Nama Lengkap</span></td>
						<td>Muklas Isa Dewa</td>
					</tr>
					<tr>
					  <td><span>Tempat lahir</span></td>
					  <td>Blitar</td>
					</tr>
					<tr>
					  <td><span>Tanggal lahir</span></td>
					  <td>27 Maret 2001</td>
					</tr>
					<tr>
					  <td><span>Jenis kelamin</span></td>
					  <td>Laki - laki</td>
					</tr>
					<tr>
					  <td colspan="2">&nbsp;</td>
					</tr>
					<tr>
					  <td><span>Agama</span></td>
					  <td>Islam</td>
					</tr>
					<tr>
					  <td><span>Golongan darah</span></td>
					  <td>A</td>
					</tr>
					<tr>
					  <td><span>Warga negara</span></td>
					  <td>Warga Indonesia</td>
					</tr>
					<tr>
					  <td><span>Hobi Seni</span></td>
					  <td>Musik</td>
					</tr>
					<tr>
					  <td><span>Hobi Olahraga</span></td>
					  <td>Bulu Tangkis</td>
					</tr>
					<tr>
					  <td colspan="2">&nbsp;</td>
					</tr>
					<tr>
					  <td><span>Universitas</span></td>
					  <td>Brawijaya</td>
					</tr><tr>
					  <td><span>Fakultas</span></td>
					  <td>Ilmu Komputer</td>
					</tr><tr>
					  <td><span>Jurusan</span></td>
					  <td>Teknik Informatika</td>
					</tr><tr>
					  <td><span>Prgram Studi</span></td>
					  <td>Teknik Komputer</td>
					</tr><tr>
					  <td><span>Tahun Angkatan</span></td>
					  <td>2019</td>
					</tr>
					<tr>
					  <td colspan="2">&nbsp;</td>
					</tr>
					<tr>
					  <td><span>Alamat</span></td>
					  <td>Ds.Bangsri Kec.Nglegok Kab.Blitar</td>
					</tr><tr>
					  <td><span>Negara</span></td>
					  <td>Indonesia</td>
					</tr><tr>
					  <td><span>Provinsi</span></td>
					  <td>Jawa Timur</td>
					</tr><tr>
					  <td><span>Kota</span></td>
					  <td>Kab. Blitar</td>
					</tr><tr>
					  <td><span>Kode Pos</span></td>
					  <td>66181</td>
					</tr>
					<tr>
						  <td><span>Email</span></td>
						  <td>muklas_id@student.ub.ac.id</td>
					</tr>
					<tr>
						  <td><span>Nomor HP</span></td>
						  <td>085233106747</td>
					</tr>
					
				  </tbody></table>
            </div>
            <img src="assets/img/main-img.png"></img>
        </div>
    </section>

    <footer>
		<p>Muklas Isa Dewa</p>
		<p>Contact Me</p>
		<div class="social">
			<a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
			<a href="https://www.instagram.com/muklas.id_"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/+6285233106747"><i class="fab fa-whatsapp"></i></a>
		</div>
		<p class="end">CopyRight By Muklas.ID_</p>
	</footer>
    </React.Fragment>
  )
}
