"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CalendarDays, Camera, ChevronRight, ExternalLink, Heart,
  MapPin, MessageCircle, Scissors, Sparkles, Star, Users, X,
} from "lucide-react";

const whatsapp = "https://wa.me/5521973555429";
const instagram = "https://www.instagram.com/dkconcepthair/";
const drikaInstagram = "https://www.instagram.com/nunesdrika/";
const reviewLink = "https://bit.ly/deixeavalia%C3%A7%C3%A3o";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=DK+Concept+Hair+Av.+Dom+Helder+Camara+5200+Cachambi+Rio+de+Janeiro";

const gallery = [
  ["resultado-01.webp", "Coloração vinho com cachos e movimento"],
  ["resultado-02.webp", "Cachos definidos com iluminação suave"],
  ["resultado-03.webp", "Loiro iluminado com corte em camadas"],
  ["resultado-04.webp", "Corte curto loiro elegante"],
  ["resultado-05.webp", "Loiro perolado com finalização em camadas"],
  ["resultado-06.webp", "Cabelo castanho com luzes sutis"],
  ["resultado-07.webp", "Mechas iluminadas em cabelo longo"],
  ["resultado-08.webp", "Loiro clássico com acabamento alinhado"],
  ["resultado-09.webp", "Morena iluminada com ondas naturais"],
  ["resultado-10.webp", "Coloração acobreada com ondas brilhantes"],
];

const services = [
  [Scissors, "Cortes", "Formatos que valorizam seus traços e sua rotina."],
  [Sparkles, "Mechas e iluminação", "Luz, contraste e dimensão com técnica personalizada."],
  [Heart, "Coloração", "Tons pensados para realçar sua beleza e seu estilo."],
  [Sparkles, "Tratamentos capilares", "Cuidado para força, brilho e saúde dos fios."],
  [Scissors, "Finalização", "Movimento, definição e acabamento para cada ocasião."],
  [Heart, "Manicure", "Cuidado delicado para completar o seu momento."],
];

const testimonials = [
  { name: "Sol Solange", quote: "Maravilhosa profissional! Atendimento ímpar, ambiente harmonioso, produtos de qualidade e ótimo custo-benefício." },
  { name: "Aline Fernandes", quote: "Um lugar de autocuidado pensado para mulheres. Saí com o cabelo lindo e com a autoestima renovada." },
  { name: "Priscilla Leite Ribeiro", quote: "Ambiente acolhedor e excelentes profissionais. O resultado foi excelente! Voltarei mais vezes." },
  { name: "Ana Beatriz Policicchio", quote: "Ótimo atendimento de toda a equipe, em especial a Drika, que fez um corte lindo!" },
  { name: "Marília Oliveira", quote: "Drika é sempre muito gentil e atenciosa. O trabalho dela é simplesmente impecável." },
];

function GoldStars() {
  return (
    <span className="stars" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" strokeWidth={1.6} />)}
    </span>
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") setSelectedImage((selectedImage + 1) % gallery.length);
      if (event.key === "ArrowLeft") setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [selectedImage]);

  const businessSchema = {
    "@context": "https://schema.org", "@type": "BeautySalon", name: "DK Concept Hair",
    telephone: "+55 21 97355-5429",
    address: { "@type": "PostalAddress", streetAddress: "Av. Dom Hélder Câmara, 5200 — Torre Norte, sala 536", addressLocality: "Rio de Janeiro", addressRegion: "RJ", postalCode: "20771-004", addressCountry: "BR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "71" },
    sameAs: [instagram, drikaInstagram],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <header className="topbar">
        <a className="brand-mini" href="#inicio" aria-label="DK Concept Hair — início"><Image src="/assets/logo-dk.webp" alt="" width={700} height={700} priority /><span>DK Concept Hair</span></a>
        <a className="topbar-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar <CalendarDays size={17} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-inner">
          <Image className="hero-logo" src="/assets/logo-dk.webp" alt="Logo DK Concept Hair" width={700} height={700} priority sizes="(max-width: 720px) 170px, 250px" />
          <p className="eyebrow">Salão de beleza no Norte Shopping</p>
          <h1>Revelando sua melhor versão.</h1>
          <p className="hero-location"><MapPin size={17} /> Cachambi, Rio de Janeiro · Torre Norte, sala 536</p>
          <a className="rating-pill" href={mapsLink} target="_blank" rel="noreferrer"><GoldStars /> <strong>5,0</strong> <span>71 avaliações no Google</span></a>
          <div className="hero-actions">
            <a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Agende seu horário</a>
            <a className="button button-outline" href={mapsLink} target="_blank" rel="noreferrer"><MapPin size={19} /> Como chegar</a>
          </div>
        </div>
      </section>

      <nav className="quick-links" aria-label="Acessos rápidos">
        <a className="quick-card featured" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle /><span><strong>WhatsApp</strong><small>Agendar atendimento</small></span><ChevronRight /></a>
        <a className="quick-card" href={instagram} target="_blank" rel="noreferrer"><Camera /><span><strong>Instagram</strong><small>Veja nossos trabalhos</small></span><ChevronRight /></a>
        <a className="quick-card" href={mapsLink} target="_blank" rel="noreferrer"><MapPin /><span><strong>Localização</strong><small>Como chegar</small></span><ChevronRight /></a>
        <a className="quick-card" href={reviewLink} target="_blank" rel="noreferrer"><Star /><span><strong>Google</strong><small>Avalie sua experiência</small></span><ChevronRight /></a>
      </nav>

      <section className="section services-section" id="servicos">
        <div className="section-heading"><p className="eyebrow dark">Cuidado feito para você</p><h2>Seu momento de cuidado começa aqui</h2><p>Cuidado, técnica e atenção para valorizar sua beleza e o seu estilo.</p></div>
        <div className="services-grid">
          {services.map(([Icon, title, text]) => { const ServiceIcon = Icon as typeof Scissors; return (
            <article className="service-card" key={title as string}><span className="icon-wrap"><ServiceIcon /></span><h3>{title as string}</h3><p>{text as string}</p></article>
          ); })}
        </div>
        <div className="inline-cta"><span>Quer saber qual serviço é ideal para você?</span><a href={whatsapp} target="_blank" rel="noreferrer">Fale com a equipe <ChevronRight size={17} /></a></div>
      </section>

      <section className="section gallery-section" id="resultados">
        <div className="section-heading light"><p className="eyebrow">Transformações reais</p><h2>Resultados que falam por si</h2><p>Inspirações, transformações e cuidados realizados pela equipe DK Concept Hair.</p></div>
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <button className={`gallery-item gallery-${index + 1}`} key={src} onClick={() => setSelectedImage(index)} aria-label={`Ampliar foto: ${alt}`}>
              <Image src={`/assets/${src}`} alt={alt} width={382} height={510} sizes="(max-width: 720px) 50vw, (max-width: 980px) 33vw, 20vw" /><span>Ver resultado <ExternalLink size={14} /></span>
            </button>
          ))}
        </div>
        <a className="button button-gold gallery-cta" href={whatsapp} target="_blank" rel="noreferrer">Quero transformar meu visual</a>
      </section>

      <section className="section space-section">
        <div className="space-copy"><p className="eyebrow dark">Conheça o nosso espaço</p><h2>Um espaço pensado para você</h2><p>Um ambiente acolhedor no Norte Shopping para você cuidar da beleza, desacelerar e aproveitar o seu momento.</p><div className="location-badge"><MapPin size={18} /> Norte Shopping — Torre Norte, sala 536</div><a className="button button-navy" href={whatsapp} target="_blank" rel="noreferrer">Agende sua visita</a></div>
        <div className="video-frame"><video controls playsInline preload="metadata" poster="/assets/salao-poster.jpg"><source src="/assets/salao.mp4" type="video/mp4" />Seu navegador não oferece suporte a vídeos.</video></div>
      </section>

      <section className="purpose-section">
        <div className="purpose-photo"><Image src="/assets/drika-nova.png" alt="Drika Nunes, profissional à frente da DK Concept Hair" width={944} height={344} sizes="(max-width: 980px) 100vw, 50vw" /></div>
        <div className="purpose-copy">
          <p className="eyebrow">DK Concept Hair além do salão</p><h2>Beleza que transforma</h2><h3>Drika no Beauty Day da L’Oréal</h3>
          <p>Em agosto de 2026, Drika participou de um Beauty Day muito especial: 10 mulheres e 10 profissionais reunidos para proporcionar uma experiência inesquecível através da beleza.</p>
          <p>O encontro foi marcado por acolhimento, autoestima, carinho e valorização.</p>
          <blockquote>“Mais do que beleza, um momento de acolhimento e autoestima.”</blockquote>
          <div className="about-drika"><h3>Por trás da DK</h3><p>Adriana, a Drika, acredita que cuidar da beleza também é uma forma de fortalecer a autoestima e valorizar cada mulher em sua individualidade.</p><a href={drikaInstagram} target="_blank" rel="noreferrer">Acompanhe a Drika <span>@nunesdrika</span> <ExternalLink size={14} /></a></div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="reviews-summary"><p className="eyebrow dark">Experiências reais</p><h2>Quem conhece, recomenda</h2><GoldStars /><strong className="rating-number">5,0</strong><span>71 avaliações no Google</span></div>
        <div className="reviews-track">
          {testimonials.map((review) => <article className="review-card" key={review.name}><GoldStars /><p>“{review.quote}”</p><strong>{review.name}</strong><small>Avaliação no Google</small></article>)}
        </div>
        <div className="review-actions"><a className="button button-outline-dark" href={mapsLink} target="_blank" rel="noreferrer">Veja mais avaliações</a><a className="button button-navy" href={reviewLink} target="_blank" rel="noreferrer">Avalie no Google</a></div>
      </section>

      <section className="location-section" id="localizacao">
        <div className="map-wrap"><iframe title="Mapa com a localização da DK Concept Hair" src="https://www.google.com/maps?q=DK%20Concept%20Hair%20Av.%20Dom%20Helder%20Camara%205200%20Rio%20de%20Janeiro&output=embed" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="location-copy"><p className="eyebrow">Localização</p><h2>Estamos esperando por você</h2><h3>DK Concept Hair</h3><address>Norte Shopping — Torre Norte, sala 536<br />Av. Dom Hélder Câmara, 5200<br />Cachambi, Rio de Janeiro — RJ<br />CEP 20771-004</address><a className="button button-gold" href={mapsLink} target="_blank" rel="noreferrer"><MapPin size={19} /> Traçar rota</a><small>Atendimento mediante disponibilidade. Agende seu horário pelo WhatsApp.</small></div>
      </section>

      <section className="final-cta" id="contato">
        <div><p className="eyebrow">Vamos cuidar de você?</p><h2>Revele sua melhor versão.</h2><p>Seu próximo momento de cuidado começa aqui.</p></div>
        <a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Agendar pelo WhatsApp</a>
        <div className="contact-details"><span>(21) 97355-5429</span><span>Contato adicional: (21) 99561-3247</span></div>
      </section>

      <footer>
        <Image src="/assets/logo-dk.webp" alt="DK Concept Hair" width={700} height={700} /><p>© 2026 DK Concept Hair. Todos os direitos reservados.</p><p>Norte Shopping · Cachambi · Rio de Janeiro</p>
        <div className="social-links"><a href={instagram} target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a><a href="https://www.facebook.com/dkconcepthair/" target="_blank" rel="noreferrer"><Users size={18} /> Facebook</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div>
        <small>Desenvolvido por Kelly Web Studio</small>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><MessageCircle /></a>

      {selectedImage !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada">
          <button className="lightbox-backdrop" onClick={() => setSelectedImage(null)} aria-label="Fechar foto" />
          <div className="lightbox-content"><button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Fechar"><X /></button><Image src={`/assets/${gallery[selectedImage][0]}`} alt={gallery[selectedImage][1]} width={382} height={510} sizes="(max-width: 560px) 90vw, 520px" /><p>{gallery[selectedImage][1]}</p></div>
        </div>
      )}
    </main>
  );
}
