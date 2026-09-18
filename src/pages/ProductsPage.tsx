import React, { useState } from 'react';
import { PageId } from '../types.ts';
import {
  ArrowLeft,
  Sparkles,
  MessageCircle,
  SunMedium,
  Heart,
  HelpCircle,
  ChefHat,
  Check,
} from 'lucide-react';

interface PageProps {
  onNavigate: (page: PageId) => void;
  onOpenLocationModal: () => void;
}

interface ProductItem {
  nombre: string;
  detalle: string;
  badge?: string;
}

interface ProductCategory {
  id: string;
  titulo: string;
  bajada: string;
  descripcion: string;
  imagen: string;
  altImagen: string;
  icono: React.ElementType;
  colorTag: string;
  bgTag: string;
  bgBloque: string;
  borderBloque: string;
  itemsDestacados: string[];
  items: ProductItem[];
}

export const ProductsPage: React.FC<PageProps> = ({ onNavigate, onOpenLocationModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categorias: ProductCategory[] = [
    {
      id: 'todos-los-dias',
      titulo: 'Los de todos los días',
      bajada: 'Lo indispensable de la cocina con sabor de verdad y punto justo.',
      descripcion:
        'Los básicos que nunca faltan en tu heladera ni en tu frutera: tomates con aroma a huerta, papas de cocción cremosa, cebollas dulces, zanahorias crocantes con hoja viva y manzanas seleccionadas una a una.',
      imagen: '/productos-cotidianos.png',
      altImagen: 'Variedad de productos cotidianos: tomates, papas, cebollas, zanahorias y manzanas frescas',
      icono: Heart,
      colorTag: 'text-[#315C4D]',
      bgTag: 'bg-[#EDF5E7]',
      bgBloque: 'bg-[#FEF8DC]/60',
      borderBloque: 'border-[#F6D96B]/80',
      itemsDestacados: ['Tomate', 'Papa', 'Cebolla', 'Zanahoria', 'Manzana'],
      items: [
        { nombre: 'Tomates perita y redondos', detalle: 'Carnosos, de huerta bonaerense, cosechados en mata y sin maduración forzada en frío.', badge: 'Básico infalible' },
        { nombre: 'Papas lavadas seleccionadas', detalle: 'Cremosas para puré, firmes al hervir y bien secas para dorar al horno.', badge: 'Calidad superior' },
        { nombre: 'Cebollas dulces y moradas', detalle: 'Cebollas con piel crujiente, ideales para ensaladas crudas o sofritos lentos.', badge: 'Frescura de origen' },
        { nombre: 'Zanahorias con rama fresca', detalle: 'Jugosas, dulces y crujientes con su hoja verde intacta que certifica cosecha reciente.', badge: 'Con hoja viva' },
        { nombre: 'Manzanas rojas y verdes', detalle: 'Variedades crujientes con el equilibrio justo entre dulzura y acidez.', badge: 'Selección diaria' },
        { nombre: 'Lechugas mantecosa y capuchina', detalle: 'Hojas tiernas e hidratadas, cortadas de madrugada y mantenidas con humedad natural.', badge: 'Hoja crujiente' },
      ],
    },
    {
      id: 'estacion',
      titulo: 'Los que llegan con la estación',
      bajada: 'Lo que la tierra da hoy en su punto máximo de maduración y perfume.',
      descripcion:
        'La naturaleza tiene sus momentos y nosotros los celebramos: cítricos dulces cargados de jugo, higos negros melosos, duraznos criollos que perfuman el mercado, zapallos curados al sol y espárragos verdes recién cosechados.',
      imagen: '/productos-estacion.png',
      altImagen: 'Frutas y verduras de estación: cítricos, zapallos, higos frescos, duraznos y espárragos',
      icono: SunMedium,
      colorTag: 'text-[#E95B4E]',
      bgTag: 'bg-[#FDE8E3]',
      bgBloque: 'bg-[#FDE8E3]/50',
      borderBloque: 'border-[#F6B7A9]/80',
      itemsDestacados: ['Cítricos', 'Zapallo', 'Higos', 'Duraznos', 'Espárragos'],
      items: [
        { nombre: 'Cítricos jugosos de estación', detalle: 'Naranjas de ombligo, mandarinas criollas y pomelos rosados rebosantes de jugo.', badge: 'Cosecha del litoral' },
        { nombre: 'Duraznos criollos amarillos', detalle: 'Piel aterciopelada y fragancia intensa. Dulzura concentrada que no vas a encontrar en cámara.', badge: 'Punto óptimo' },
        { nombre: 'Higos negros frescos', detalle: 'Piel tierna y corazón dulce como mermelada viva, seleccionados pieza por pieza.', badge: 'Muy efímeros' },
        { nombre: 'Zapallos anco y kabutiá', detalle: 'Curados al sol con pulpa densa, dulce y rendidora para sopas y asados.', badge: 'Curados al sol' },
        { nombre: 'Espárragos verdes tiernos', detalle: 'Puntas firmes y tallos crocantes para saltear a la sartén o cocinar al vapor con oliva.', badge: 'Recién cortados' },
        { nombre: 'Ciruelas remolacha y reina claudia', detalle: 'Acidez refrescante y pulpa tierna color borravino para comer en el día.', badge: 'De temporada' },
      ],
    },
    {
      id: 'descubrimientos',
      titulo: 'Los que te hacen preguntar: ¿qué es esto?',
      bajada: 'Variedades llamativas, raras y difíciles de conseguir en una verdulería tradicional.',
      descripcion:
        'Nos encanta la curiosidad botánica y gastronómica: pitahayas fucsias de pulpa refrescante, carambolas con forma de estrella, maracuyás aromáticos, physalis dorados en su cáliz de papel y frutos exóticos para explorar nuevos sabores.',
      imagen: '/productos-raros.png',
      altImagen: 'Frutas raras y especiales: pitahaya, carambola estrella, maracuyá, physalis y frutos exóticos',
      icono: HelpCircle,
      colorTag: 'text-[#26332D]',
      bgTag: 'bg-[#FEF8DC]',
      bgBloque: 'bg-[#FEF8DC]/70',
      borderBloque: 'border-[#F6D96B]',
      itemsDestacados: ['Pitahaya', 'Carambola', 'Maracuyá', 'Physalis', 'Kiwano'],
      items: [
        { nombre: 'Pitahaya / Fruta del Dragón', detalle: 'De aspecto escultórico y fucsia vibrante, pulpa suave salpicada de semillas crocantes.', badge: 'Rareza exótica' },
        { nombre: 'Carambola / Fruta estrella', detalle: 'Al cortarla forma estrellas perfectas. Textura crocante con jugo fresco y cítrico.', badge: 'Visual y crujiente' },
        { nombre: 'Maracuyá aromático', detalle: 'Pulpa brillante con acidez electrizante, ideal para postres, vinagretas y limonadas.', badge: 'Aroma tropical' },
        { nombre: 'Physalis / Uchuva dorada', detalle: 'Baya dorada envuelta en su cáliz de papel natural, con un toque agridulce sorprendente.', badge: 'Bocados joya' },
        { nombre: 'Tomates reliquia atigrados', detalle: 'Variedades heirloom de semillas ancestrales con vetas verdes y sabor umami profundo.', badge: 'Semilla antigua' },
        { nombre: 'Flores comestibles orgánicas', detalle: 'Pensamientos y caléndulas cultivadas sin químicos para decorar platos y ensaladas.', badge: 'Cocina creativa' },
      ],
    },
    {
      id: 'aromaticas',
      titulo: 'Para darle otra vuelta a tus comidas',
      bajada: 'Hierbas vivas, hongos de cultivo, romanesco y raíces que transforman cualquier receta.',
      descripcion:
        'El secreto para cocinar como en un buen bistró: atados de albahacas aromáticas, gírgolas frescas, romanesco de geometría fractal, pak choi crujiente y raíces carnosas de cúrcuma y jengibre para llenar de aroma tu cocina.',
      imagen: '/productos-especiales-cocina.png',
      altImagen: 'Especiales de cocina: hierbas aromáticas vivas, hongos de cultivo, romanesco, pak choi y cúrcuma',
      icono: ChefHat,
      colorTag: 'text-[#315C4D]',
      bgTag: 'bg-[#F2EEFA]',
      bgBloque: 'bg-[#F2EEFA]/60',
      borderBloque: 'border-[#C9B8E8]',
      itemsDestacados: ['Aromáticas vivas', 'Hongos de cultivo', 'Romanesco', 'Pak choi', 'Cúrcuma'],
      items: [
        { nombre: 'Hierbas aromáticas en manojo vivo', detalle: 'Albahaca morada, cilantro con raíz, eneldo plumoso, tomillo limón y romero serrano.', badge: 'Atado vivo' },
        { nombre: 'Gírgolas y hongos frescos de cultivo', detalle: 'Textura carnosa y sabor a bosque húmedo para risottos, salteados y pastas.', badge: 'Cosecha fresca' },
        { nombre: 'Romanesco fractal', detalle: 'Pariente escultórico del brócoli con sabor a nuez suave y textura crujiente.', badge: 'Geometría viva' },
        { nombre: 'Pak choi tierno', detalle: 'Tallo blanco carnoso y hojas verdes suaves, excelente para saltear en wok con soja y sésamo.', badge: 'Wok y ensalada' },
        { nombre: 'Raíz fresca de cúrcuma y jengibre', detalle: 'Trozos firmes y jugosos, con todo el perfume y color dorado sin procesar.', badge: 'Poder aromático' },
        { nombre: 'Ciboulette fino y puerro baby', detalle: 'Corte fino y sutil toque aliáceo para terminar platos con frescura primaveral.', badge: 'Toque gourmet' },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === 'todos'
      ? categorias
      : categorias.filter((c) => c.id === activeCategory);

  return (
    <div className="bg-[#FFF8ED] text-[#26332D]">
      {/* ========================================================================= */}
      {/* 1. SECCIÓN INTRODUCCIÓN PRINCIPAL (Fondo Verde Claro #EDF5E7)             */}
      {/* ========================================================================= */}
      <section
        id="productos-intro"
        className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 bg-[#EDF5E7] border-b border-[#A8C98D]/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra superior de navegación y badge */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#315C4D] hover:text-[#25483c] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#A8C98D]/60 text-[#315C4D] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#E95B4E]" />
              <span>Selección viva & estacional</span>
            </span>
          </div>

          {/* Encabezado Editorial requerido */}
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-3 sm:space-y-4">
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26332D] leading-[1.15]">
              Nuestros productos
            </h1>

            <p className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#315C4D] leading-snug">
              “Frutas, verduras y algunas sorpresas”
            </p>

            <p className="text-base sm:text-lg text-[#26332D]/85 font-sans leading-relaxed">
              Nuestra selección cambia con las estaciones, la disponibilidad y las ganas de seguir buscando cosas nuevas. Preparado para incluir las 4 secciones: “Los de todos los días”, “Los que llegan con la estación”, “Los que te hacen preguntar: ¿qué es esto?” y “Para darle otra vuelta a tus comidas”.
            </p>
          </div>

          {/* Fotografía horizontal grande panorámica */}
          <div
            id="productos-especiales-img-container"
            className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#A8C98D]/60 shadow-sm hover:shadow-md transition-shadow bg-[#FFF8ED]"
          >
            <div className="w-full aspect-[16/9] sm:aspect-[16/7.5] lg:aspect-[2.1/1] overflow-hidden">
              <img
                id="productos-especiales-img"
                src="/productos-especiales.png"
                alt="Abundancia de frutas y verduras frescas de estación, variedades llamativas y hallazgos gastronómicos especiales en Mercado Primavera"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLORACIÓN DE LAS 4 CATEGORÍAS EDITORIALES                            */}
      {/* ========================================================================= */}
      <section
        id="productos-categorias"
        className="py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Filtro interactivo rápido por categoría */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 sm:mb-14 border-b border-[#E8D7C0] pb-6">
          <div className="space-y-1">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#26332D]">
              Explorá las 4 categorías
            </h2>
            <p className="text-xs sm:text-sm text-[#26332D]/70 font-sans">
              Cada grupo reúne productos seleccionados para distintos momentos de tu cocina.
            </p>
          </div>

          {/* Botones de filtro rápido */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'todos'
                  ? 'bg-[#315C4D] text-[#FFF8ED] shadow-2xs'
                  : 'bg-white text-[#26332D] border border-[#E8D7C0] hover:bg-[#FFF2DE]'
              }`}
            >
              Todas las categorías
            </button>
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#315C4D] text-[#FFF8ED] shadow-2xs'
                    : 'bg-white text-[#26332D] border border-[#E8D7C0] hover:bg-[#FFF2DE]'
                }`}
              >
                {cat.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de Categorías con Texto + Imagen Pequeña Lado a Lado */}
        <div className="space-y-16 sm:space-y-20">
          {filteredCategories.map((categoria) => {
            const CatIcon = categoria.icono;
            return (
              <div
                key={categoria.id}
                id={`cat-${categoria.id}`}
                className="space-y-6 sm:space-y-7"
              >
                {/* ======================================================= */}
                {/* BLOQUE DE CABECERA DE CATEGORÍA (TEXTO + IMAGEN PEQUEÑA) */}
                {/* ======================================================= */}
                <div
                  className={`rounded-3xl p-6 sm:p-7 lg:p-8 border ${categoria.bgBloque} ${categoria.borderBloque} transition-all duration-300 shadow-2xs`}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-8">
                    {/* TEXTO A LA IZQUIERDA (MOBILE: PRIMERO) */}
                    <div className="flex-1 space-y-3.5 order-1">
                      {/* Badge superior con ícono */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${categoria.bgTag} ${categoria.colorTag} border border-black/5 shadow-2xs`}
                        >
                          <CatIcon className="w-3.5 h-3.5" />
                          <span>Categoría</span>
                        </span>
                      </div>

                      {/* Título de la categoría */}
                      <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-[#26332D] leading-tight">
                        {categoria.titulo}
                      </h3>

                      {/* Bajada */}
                      <p className="font-serif-title text-base sm:text-lg text-[#315C4D] font-medium leading-snug">
                        {categoria.bajada}
                      </p>

                      {/* Descripción evocativa */}
                      <p className="text-xs sm:text-sm text-[#26332D]/85 font-sans leading-relaxed">
                        {categoria.descripcion}
                      </p>

                      {/* Pills de alimentos representativos para escaneo visual rápido */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-[11px] font-mono text-[#26332D]/60 uppercase tracking-wider mr-1">
                          Encontrarás:
                        </span>
                        {categoria.itemsDestacados.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-full bg-white/90 text-xs font-medium text-[#26332D] border border-black/5 shadow-2xs"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* IMAGEN PEQUEÑA Y REPRESENTATIVA (DESKTOP: DERECHA | MOBILE: ABAJO) */}
                    <div className="w-full sm:w-60 md:w-72 lg:w-80 shrink-0 order-2">
                      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 shadow-xs hover:shadow-md transition-shadow bg-white aspect-[4/3] w-full">
                        <img
                          src={categoria.imagen}
                          alt={categoria.altImagen}
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-1.5 text-center text-[10px] font-mono text-[#26332D]/55 tracking-wide uppercase">
                        Apoyo visual · Selección fresca
                      </p>
                    </div>
                  </div>
                </div>

                {/* ======================================================= */}
                {/* GRID DE ELEMENTOS ESPECÍFICOS DE LA CATEGORÍA           */}
                {/* ======================================================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {categoria.items.map((prod) => (
                    <div
                      key={prod.nombre}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8D7C0] hover:border-[#315C4D]/40 transition-all duration-300 shadow-2xs hover:shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#26332D] leading-snug">
                            {prod.nombre}
                          </h4>
                          {prod.badge && (
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#FFF8ED] text-[#315C4D] border border-[#E8D7C0] shrink-0">
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans leading-relaxed">
                          {prod.detalle}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] text-[#315C4D] font-medium">
                        <span>Disponible en cajones</span>
                        <Check className="w-3.5 h-3.5 text-[#315C4D]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BANNER DE CONSULTA Y WHATSAPP                                             */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-[#FEF8DC] border border-[#F6D96B] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E95B4E] font-bold">
              ¿Buscás algo fuera de lo común?
            </span>
            <h4 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#26332D]">
              Consultanos qué entró hoy al mercado
            </h4>
            <p className="text-xs sm:text-sm text-[#26332D]/80 font-sans max-w-xl">
              Traemos lotes pequeños de frutas especiales, hongos y hierbas exóticas que a veces se van volando. Escribinos antes de venir y te confirmamos qué hay en cajones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/5491145892311"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#315C4D] text-[#FFF8ED] text-sm font-semibold hover:bg-[#25483c] transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#F6D96B]" />
              <span>Preguntar por WhatsApp</span>
            </a>

            <button
              onClick={onOpenLocationModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#26332D] text-sm font-semibold border border-[#E8D7C0] hover:bg-[#FFF2DE] transition-all cursor-pointer"
            >
              <span>Dónde estamos</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
