import React from 'react'
import { Link } from 'react-router-dom'

export default function Portofolio() {
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
				<h2>Porto<span>folio</span></h2>

				<table class="tampilbio" cellpadding="0" cellspacing="3" border="0">
					<tbody>
					<tr>
						<td><span>UKM Seni Religi 2019 - Sekarang</span></td>
						<td>Pada Divisi Media yang Branding merupakan divisi yang bertanggung jawab
                            dalam pengelolaan media sosial dan konten kreatif pada instagram,
                            youtube, dan website</td>
					</tr>
					<tr>
					  <td><span>Robotiik 2020 - Sekarang</span></td>
					  <td>Robotiik merupakan lembaga yang mewadahi mahasiswa Fakultas
                        Ilmu Komputer Universitas Brawijaya yang mempunyai minat dan
                        bakat dalam bidang robotika, setiap tahun mendelegasikan tim
                        pada Kompetisi Robot Indonesia (KRI)</td>
					</tr>
				  </tbody></table>
			</div>
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
