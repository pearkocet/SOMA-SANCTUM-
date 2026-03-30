# SOMA SANCTUM — Ideas de Diseño

## Contexto de Marca
Tequila ultra-lujoso que combina ritualismo espiritual indio, estética clínica de rehabilitación de lujo y exclusividad extrema. No es una fiesta. Es un santuario.

---

<response>
<probability>0.07</probability>
<idea>

## Opción A: "Templo Clínico" — Sacred Sterility

**Design Movement:** Neoclásico Minimalista + Brutalismo Espiritual

**Core Principles:**
1. Asimetría controlada: columnas de texto desplazadas, márgenes intencionalmente irregulares
2. Silencio visual: grandes zonas de vacío que crean tensión y expectativa
3. Contraste de materiales: la frialdad del acero quirúrgico contra la calidez del oro antiguo
4. Texto como arquitectura: tipografía que estructura el espacio como muros y pilares

**Color Philosophy:**
- Fondo: índigo profundo (#1A1F3B) — el color del cielo antes del amanecer, entre sueño y vigilia
- Texto principal: marfil cálido (#F5F1E8) — pergamino antiguo, no blanco clínico
- Acento dorado: (#C6A962) — oro envejecido, no brillante, como reliquias de templo
- Gris ceniza: (#D9D9D9) — niebla, neutralidad, espacio de transición

**Layout Paradigm:**
Columnas asimétricas 30/70 y 60/40. Texto anclado a la izquierda con imágenes que "flotan" a la derecha. Secciones con alturas variables que crean ritmo visual. Sin grid uniforme.

**Signature Elements:**
1. Líneas horizontales ultra-finas en dorado que dividen secciones como reglas de laboratorio
2. Motivo de loto geométrico en wireframe — aparece como marca de agua, sello, y elemento decorativo
3. Numeración romana o de protocolo (I, II, III / Protocol No. 7) como elementos de diseño

**Interaction Philosophy:**
Cada interacción es deliberada y lenta. No hay respuestas instantáneas. Los hover effects tienen un delay de 200ms antes de activarse, como si el sistema "considerara" la acción.

**Animation:**
- Fade-in con blur: elementos aparecen de 0 opacity + blur(8px) a 1 opacity + blur(0)
- Parallax sutil en imágenes de fondo (velocidad 0.3x)
- Botones: borde dorado que se "dibuja" alrededor al hover (stroke animation)
- Botella: flotación suave con rotación de ±2° en loop de 6 segundos
- Transiciones de sección: fade cross-dissolve de 800ms

**Typography System:**
- Display: Cormorant Garamond (peso 300, 600) — elegancia italiana, ligeramente arcaica
- Subtítulos: Cormorant Garamond Italic — para citas y textos rituales
- Body: DM Sans (peso 300, 400) — limpio, médico, sin personalidad excesiva
- Etiquetas/datos: Letter Spacing 0.3em en mayúsculas — efecto de documento oficial

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

## Opción B: "Manuscrito Sagrado" — Illuminated Manuscript

**Design Movement:** Art Nouveau Oscuro + Esoterismo Editorial

**Core Principles:**
1. Cada página como un folio iluminado — bordes ornamentales, texto justificado
2. La botella como objeto sagrado en vitrina — siempre enmarcada, nunca suelta
3. Revelación progresiva — el contenido se "descubre" al hacer scroll, como leer un grimorio
4. Densidad controlada — secciones densas alternadas con páginas en blanco

**Color Philosophy:**
- Base: negro profundo con textura de papel envejecido
- Dorado: brillante y ornamental, como pan de oro en manuscritos medievales
- Rojo sangre de buey: acento para elementos de alerta o énfasis ritual
- Crema: texto sobre fondos oscuros

**Layout Paradigm:**
Columnas de texto tipo libro, con márgenes amplios para anotaciones. Imágenes enmarcadas con bordes ornamentales. Separadores de capítulo con motivos de loto y geometría sagrada.

**Signature Elements:**
1. Capitulares decorativas al inicio de cada sección
2. Bordes ornamentales con motivos de agave y loto entrelazados
3. Sellos circulares con texto en sánscrito o latín

**Interaction Philosophy:**
El usuario "hojea" el sitio. Las transiciones simulan el paso de páginas. Los elementos se revelan como si fueran escritos en tiempo real.

**Animation:**
- Page turn effect entre secciones
- Texto que aparece letra por letra en elementos clave
- Partículas de polvo dorado al hacer hover sobre la botella

**Typography System:**
- Display: IM Fell English — tipografía de imprenta antigua
- Body: Garamond Premier Pro — legibilidad clásica
- Ornamentos: Cinzel Decorative para títulos de sección

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

## Opción C: "Protocolo Clínico Espiritual" — Sacred Protocol ✓ SELECCIONADA

**Design Movement:** Minimalismo Ritual + Estética de Clínica de Lujo Privada

**Core Principles:**
1. Economía extrema de elementos — cada elemento presente tiene propósito ritual
2. Tensión entre lo orgánico (agave, tierra, ritual) y lo clínico (líneas, datos, protocolo)
3. El espacio vacío como ingrediente activo — el silencio entre notas es la música
4. Jerarquía de revelación — la información se entrega en dosis medidas, como un tratamiento

**Color Philosophy:**
- Índigo profundo (#1A1F3B): el fondo primario — profundidad oceánica, cielo nocturno antes del ritual
- Marfil cálido (#F5F1E8): texto y elementos primarios — calidez sin estridencia, como luz de vela
- Oro mate (#C6A962): acento sagrado — no brillante, sino envejecido como reliquias
- Ceniza suave (#D9D9D9): elementos secundarios, líneas, separadores
- Negro absoluto (#0A0C1A): sombras y profundidades

**Layout Paradigm:**
Pantalla completa por sección (full-viewport). Texto posicionado con precisión quirúrgica — nunca centrado de forma genérica. Alternancia entre composiciones de texto-dominante e imagen-dominante. La botella siempre aparece en posición de altar: centrada, elevada, iluminada desde arriba.

**Signature Elements:**
1. Loto geométrico en wireframe dorado — aparece como sello, marca de agua y elemento de navegación
2. Líneas horizontales de 1px en dorado (#C6A962) — como reglas de documento médico
3. Numeración de protocolo: "Protocol No. 7", "Compound I", "Batch 001" — lenguaje de laboratorio de lujo

**Interaction Philosophy:**
Deliberado, lento, ceremonial. Los elementos responden al usuario como un sommelier de lujo: con pausa, con gracia. Los botones no "reaccionan" — "reciben". Hover effects con 150ms delay, transitions de 600-800ms.

**Animation:**
- Entrada de sección: fade-in desde abajo con blur (translateY(30px) → 0, blur(6px) → 0, 900ms ease-out)
- Botella hero: flotación continua (translateY -8px a +8px, 5s ease-in-out infinite)
- Loto: rotación ultra-lenta (360° en 30 segundos)
- Botones: borde que se "traza" en dorado al hover (clip-path animation)
- Parallax en imágenes de fondo: 0.4x velocidad de scroll
- Partículas de luz: 3-5 puntos de luz que flotan aleatoriamente en el hero
- Líneas divisoras: se "dibujan" de izquierda a derecha al entrar en viewport

**Typography System:**
- Display/Hero: Cormorant Garamond 300 — etéreo, aristocrático, espiritual
- Subtítulos: Cormorant Garamond Italic 400 — para citas y textos rituales
- Cuerpo: DM Sans 300/400 — clínico, preciso, sin ornamento
- Etiquetas de protocolo: DM Mono 400 — monoespaciado para datos de laboratorio
- Letter-spacing: 0.25em en mayúsculas para etiquetas y categorías
- Line-height: 1.8 para cuerpo, 1.1 para display grande

</idea>
</response>

---

## Decisión Final: Opción C — "Protocolo Clínico Espiritual"

Esta filosofía captura perfectamente la dualidad de SOMA SANCTUM: la profundidad espiritual del ritual indio y la precisión fría de una clínica de lujo privada. El resultado es un sitio que se siente como entrar a un santuario secreto donde la experiencia está "prescrita", no vendida.
