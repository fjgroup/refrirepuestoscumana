export interface RichArticleContent { slug: string; en: string; es: string }

export const richArticles: RichArticleContent[] = [
  {
    slug: 'compressor-types',
    en: `
Overview
- Refrigeration compressors move refrigerant by increasing its pressure so heat can be rejected outdoors. In small and medium systems you will most often see hermetic (sealed), semi‑hermetic, and scroll types. Less common at home but used in industry are screw and centrifugal compressors.

Common types
- Hermetic (sealed can): The motor and compressor are welded into a single steel shell. Typical in household refrigerators and small AC units. Pros: compact, quiet, leak‑resistant. Cons: not serviceable—if the motor fails, you replace the whole unit.
- Semi‑hermetic: Bolted case with service gaskets. Used in commercial refrigeration. Pros: repairable (valves, motor), higher capacities. Cons: larger, needs careful sealing to avoid leaks.
- Scroll: Two spiral elements compress the vapor smoothly. Common in residential and light‑commercial AC. Pros: efficient, few moving parts, low noise. Cons: sensitive to liquid floodback; needs correct charge and airflow.
- Reciprocating (piston): Older domestic units and many commercial systems. Pros: robust, tolerates wider conditions. Cons: more moving parts; can be louder; efficiency lower than scroll in many cases.
- Rotary (rolling piston): Compact AC units, mini‑splits. Pros: compact and low vibration. Cons: efficiency depends on tolerances and oil management.

Where they are used
- Refrigerators/freezers: Mostly small hermetic reciprocating.
- Window/portable AC and mini‑splits: Rotary and scroll.
- Commercial walk‑ins and supermarket racks: Semi‑hermetic reciprocating or scroll.

What are BTU and tons?
- BTU (British Thermal Unit) measures heat. Roughly, 12,000 BTU per hour equals 1 “ton” of cooling. A small bedroom mini‑split might be 9,000–12,000 BTU/h (¾–1 ton). A medium living room could be 18,000 BTU/h (1.5 ton). Matching capacity to the space avoids short cycling and humidity issues.

Choosing or replacing a compressor (simple checklist)
- Match refrigerant type (R‑134a, R‑410A, etc.) and oil compatibility (mineral, POE).
- Match capacity: BTU/h or kW close to the original nameplate.
- Electrical match: voltage, phase, LRA/RLA.
- Application conditions: evaporating/condensing temperatures in the expected range.

Care to extend life
- Keep coils clean and airflow unobstructed.
- Ensure correct refrigerant charge (check superheat/subcool).
- Use proper start components and protections.
- Fix restrictions and moisture promptly (filter‑drier helps protect the system).
`,
    es: `
Resumen
- Los compresores mueven el refrigerante aumentando su presión para que el calor se expulse al exterior. En equipos pequeños y medianos verás sobre todo compresores herméticos (sellados), semiherméticos y scroll. En industria aparecen tornillo y centrífugos.

Tipos comunes
- Hermético (lata sellada): Motor y compresor soldados dentro de una carcasa. Típico en neveras y aires pequeños. Ventajas: compacto, silencioso, poca fuga. Desventaja: no se repara; si falla el motor se cambia completo.
- Semihermético: Carcasa atornillada con juntas. Usado en refrigeración comercial. Ventajas: reparable (válvulas, motor), mayor capacidad. Desventajas: más grande; requiere buen sellado para evitar fugas.
- Scroll: Dos espirales comprimen el vapor de forma suave. Común en A/A residenciales y liviano‑comerciales. Ventajas: eficiente, pocos móviles, bajo ruido. Desventajas: sensible a retorno de líquido; exige carga y flujo de aire correctos.
- Alternativo (pistón): Presente en equipos domésticos antiguos y muchos comerciales. Ventajas: robusto, soporta condiciones variadas. Desventajas: más piezas móviles; puede ser más ruidoso; eficiencia menor que scroll en muchos casos.
- Rotativo (rolling piston): AC compactos y mini‑splits. Ventajas: compacto y con poca vibración. Desventajas: su eficiencia depende de tolerancias y manejo de aceite.

Dónde se usan
- Refrigeradores/congeladores: mayormente herméticos alternativos pequeños.
- A/A de ventana/portátiles y mini‑splits: rotativos y scroll.
- Cuartos fríos y racks de supermercado: semiherméticos alternativos o scroll.

¿Qué son BTU y “toneladas”?
- BTU mide calor. Aproximadamente 12.000 BTU por hora equivalen a 1 “tonelada” de refrigeración. Un mini‑split para dormitorio puede ser de 9.000–12.000 BTU/h (¾–1 ton). Un salón medio puede requerir 18.000 BTU/h (1,5 ton). Elegir la capacidad adecuada evita ciclos cortos y problemas de humedad.

Cómo elegir o reemplazar (lista simple)
- Coincidir refrigerante (R‑134a, R‑410A, etc.) y compatibilidad de aceite (mineral, POE).
- Coincidir capacidad: BTU/h o kW similares a la placa original.
- Coincidir parte eléctrica: voltaje, fase, LRA/RLA.
- Condiciones de trabajo: temperaturas de evaporación/condensación dentro del rango esperado.

Cuidados para alargar la vida
- Mantén serpentines limpios y buen flujo de aire.
- Asegura carga correcta (revisa sobrecalentamiento/subenfriamiento).
- Usa componentes de arranque y protecciones adecuados.
- Atiende restricciones y humedad a tiempo (el secador de filtro protege el sistema).
`
  },
  {
    slug: 'basic-cycle',
    en: `
The vapor‑compression refrigeration cycle moves heat using four stages:
1) Compression — The compressor raises the refrigerant vapor to high pressure and temperature.
2) Condensation — In the condenser, hot vapor rejects heat to ambient and becomes a liquid.
3) Expansion — Through a metering device, liquid pressure drops and temperature falls.
4) Evaporation — In the evaporator, the cold refrigerant absorbs heat and returns as vapor.

Everyday explanation
- Evaporator = indoor cold coil that absorbs heat.
- Condenser = outdoor hot coil that throws heat away.
- Compressor = the “pump” that keeps refrigerant moving.
- Valve/capillary = the “pinch” that makes the refrigerant get cold after the pressure drop.

Useful tips
- Clean coils and good airflow greatly improve capacity and reduce energy use.
- Correct charge matters: superheat/subcool checks help verify it.
- Record readings; compare with nameplate and manufacturer charts.
`,
    es: `
El ciclo por compresión de vapor mueve el calor en cuatro etapas:
1) Compresión — El compresor eleva la presión y temperatura del vapor de refrigerante.
2) Condensación — En el condensador, el vapor caliente cede calor al ambiente y pasa a líquido.
3) Expansión — A través del dispositivo de expansión, baja la presión del líquido y cae su temperatura.
4) Evaporación — En el evaporador, el refrigerante frío absorbe calor y regresa como vapor.

Explicación cotidiana
- Evaporador = serpentín frío interior que absorbe calor.
- Condensador = serpentín caliente exterior que expulsa calor.
- Compresor = la “bomba” que hace circular el refrigerante.
- Válvula/capilar = el “estrangulamiento” que enfría al bajar la presión.

Consejos útiles
- Serpentines limpios y buen flujo de aire mejoran mucho la capacidad y reducen consumo.
- La carga correcta importa: medir sobrecalentamiento/subenfriamiento ayuda a verificarla.
- Registra lecturas y compáralas con placa y tablas del fabricante.
`
  },
  {
    slug: 'sight-glass',
    en: `
How it works
- A sight glass is a small window on the liquid line after the condenser and receiver (or filter‑drier). It lets you see liquid refrigerant quality and, in many models, a moisture indicator.

Reading bubbles
- Clear, full liquid (no bubbles) usually means the liquid line is solid and the condenser/receiver is feeding correctly.
- Persistent bubbles can mean undercharge, flashing from pressure drop (restriction or long vertical lift), or the system still equalizing after startup.
- Judge together with subcooling: low subcooling + bubbles = likely undercharge; normal/high subcooling + bubbles = restriction/flash at the glass.

Moisture indicator
- The color dot changes with moisture content. Follow the manufacturer chart (green/dry, yellow/wet are common).
- After opening the system, a new filter‑drier and a deep vacuum should return the indicator to “dry”. If it stays “wet”, there may be a leak or water remaining in oil.

Common mistakes
- Assuming “no bubbles” always equals “correct charge”. Some systems show no bubbles but are still undercharged—verify with subcooling.
- Reading right after the compressor starts; wait a couple of minutes for stabilization.
- Installing the glass backwards or in a place with strong vibration causing foam.

Safety
- Never open the system to air to “check” the glass. Use proper gauges and recovery. Wear eye protection when working near pressurized liquid lines.
`,
    es: `
Funcionamiento
- La mirilla es una pequeña ventana en la línea de líquido, después del condensador y del recibidor (o del secador de filtro). Permite ver la calidad del líquido y, en muchos modelos, incluye un indicador de humedad.

Lectura de burbujas
- Líquido claro y lleno (sin burbujas) suele indicar columna sólida y alimentación correcta.
- Burbujas persistentes pueden indicar falta de carga, destello por caída de presión (restricción o elevación vertical), o que el sistema aún se estabiliza tras el arranque.
- Evalúa junto con el subenfriamiento: subenfriamiento bajo + burbujas = probable falta de carga; subenfriamiento normal/alto + burbujas = restricción/destello en la mirilla.

Indicadores de humedad
- El punto de color cambia con la humedad. Sigue la tabla del fabricante (verde/seco, amarillo/húmedo son comunes).
- Tras abrir el sistema, un secador nuevo y un vacío profundo deben devolver el indicador a “seco”. Si sigue “húmedo”, puede haber fuga o agua retenida en el aceite.

Errores comunes
- Asumir que “sin burbujas” siempre significa “carga correcta”. Algunos equipos no muestran burbujas aun estando bajos de gas—verifica con subenfriamiento.
- Leer inmediatamente tras encender; espera un par de minutos para estabilizar.
- Instalar la mirilla al revés o en un tramo con vibración que genera espuma.

Seguridad
- Nunca abras el sistema al ambiente para “revisar” la mirilla. Usa manómetros y recuperación adecuados. Protege tus ojos al trabajar cerca de líneas de líquido presurizadas.
`
  },
  {
    slug: 'filter-driers',
    en: `
Role and placement
- Filter driers trap moisture, acids, and small particles to protect the compressor and metering device. Place them on the liquid line close to the expansion device; for cleanup after a burnout, use suction line cores temporarily.

Selection
- Choose by connection size, flow capacity, and desiccant type (XH9/11 for HFC/POE). For severe contamination, replace cores after initial run time.

Best practices
- Always replace after opening the system to air, after a compressor change, or when moisture indicator shows wet.
- Install in the correct flow direction and support heavy shells to avoid vibration leaks.
`,
    es: `
Función e instalación
- Los secadores de filtro atrapan humedad, ácidos y partículas para proteger compresor y dispositivo de expansión. Ubícalos en la línea de líquido, cerca de la válvula; para limpieza después de quemado usa núcleos en la succión de forma temporal.

Selección
- Elige por tamaño de conexión, capacidad de flujo y tipo de desecante (XH9/11 para HFC/POE). En contaminación severa, cambia los núcleos tras el arranque inicial.

Buenas prácticas
- Reemplázalo al abrir el sistema, tras cambio de compresor o si la mirilla marca humedad.
- Respeta el sentido de flujo y sujeta cuerpos pesados para evitar fugas por vibración.
`
  },
  {
    slug: 'expansion-valves',
    en: `
Purpose
- Metering devices create a pressure drop so liquid flashes cold and can absorb heat. TXVs regulate superheat at the evaporator outlet.

TXV basics
- Bulb senses suction line temperature; equalizer senses outlet pressure. Adjust only after verifying charge and airflow. Typical superheat target 8–12°F (4–7°C).

Fixed orifices/cap tubes
- Sized for expected load; sensitive to contamination. Diagnose with superheat/subcool and pressure readings.
`,
    es: `
Propósito
- Los dispositivos de expansión generan una caída de presión para que el líquido se enfríe por destello y pueda absorber calor. Las válvulas TXV regulan el sobrecalentamiento a la salida del evaporador.

TXV en breve
- El bulbo mide temperatura de la succión; el igualador mide presión de salida. Ajustar solo tras verificar carga y flujo de aire. Objetivo típico 8–12°F (4–7°C) de sobrecalentamiento.

Orificios fijos/capilares
- Dimensionados para la carga esperada; sensibles a contaminación. Diagnóstico con sobrecalentamiento/subenfriamiento y presiones.
`
  },
  {
    slug: 'cap-tube',
    en: `
What it is
- Capillary tubes are long, small‑diameter tubes used as fixed metering devices in small systems (domestic refrigerators, dehumidifiers).

Behavior
- Flow depends on pressure difference and tube length/diameter. Kinks, partial blockages or moisture ice easily disturb performance.

Service tips
- Keep system clean and dry; always replace the drier and pull deep vacuum. If blocked, replacement is preferred over flushing.
`,
    es: `
Qué es
- El tubo capilar es un conducto largo y de pequeño diámetro que actúa como expansión fija en equipos pequeños (neveras domésticas, deshumidificadores).

Comportamiento
- El caudal depende de la diferencia de presión y de la longitud/diámetro. Doblajes, obstrucciones parciales o hielo por humedad alteran fácilmente su desempeño.

Consejos de servicio
- Mantén el sistema limpio y seco; cambia el secador y realiza vacío profundo. Si hay bloqueo, suele preferirse reemplazar antes que “limpiar”.
`
  }
  ,
  {
    slug: 'preventive-ac',
    en: `
Why maintenance matters
- Clean filters and coils reduce energy use and avoid ice/overheat trips. Small checks prevent expensive failures.

Quick checklist (home/light‑commercial)
- Filters: inspect monthly; replace/clean when dirty.
- Outdoor coil: rinse gently from inside out; keep 30–60 cm clear of debris.
- Indoor coil: check for dust/biofilm; clean with appropriate coil cleaner if airflow is low.
- Condensate: flush drain and confirm slope; test float switch.
- Electrical: tighten lugs with power off; look for discoloration of contactor or terminals.
- Airflow: confirm supply/return are not blocked; blower wheel balanced.

Seasonal steps
- Before cooling season: verify thermostat operation, test capacitors, and check refrigerant charge method recommended by manufacturer.
- After season: clean coils, record baseline pressures/temperatures for future comparison.

Safety
- Lockout/tagout before opening panels. Wear eye and hand protection. Avoid high‑pressure water on fin packs to prevent fin damage.
`,
    es: `
Por qué importa el mantenimiento
- Filtros y serpentines limpios reducen consumo y evitan congelamientos o sobrecalentamientos. Revisiones simples previenen fallas costosas.

Lista rápida (hogar/comercial liviano)
- Filtros: revisa mensual y cambia/limpia cuando estén sucios.
- Condensador (exterior): enjuaga suave de adentro hacia afuera; despeja 30–60 cm alrededor.
- Evaporador (interior): verifica polvo/biofilm; usa limpiador adecuado si el flujo de aire es bajo.
- Drenaje: destapa y confirma pendiente; prueba el interruptor de flotador.
- Eléctrico: aprieta bornes sin tensión; busca decoloraciones en contactor o terminales.
- Flujo de aire: confirma que nada bloquee retorno/suministro; balancea la turbina si vibra.

Pasos por temporada
- Antes del verano: prueba el termostato, mide capacitores y verifica el método de carga recomendado por el fabricante.
- Al finalizar: limpia serpentines y registra presiones/temperaturas base para comparar luego.

Seguridad
- Bloquea/etiqueta antes de abrir tableros. Protección ocular y guantes. Evita agua a alta presión en las aletas.
`
  },
  {
    slug: 'thermostats',
    en: `
Basics
- Thermostats sense room temperature and call for cooling/heating. Types: mechanical, digital non‑programmable, and programmable/smart.

Placement
- Interior wall, away from sunlight, supply vents, kitchens, and doors. Height ~1.5 m. Drafts or radiant heat cause mis‑readings.

Common issues
- Short cycling from poor placement; loose wires; incorrect anticipator or cycles‑per‑hour settings; dead batteries.

Wiring tips
- Label wires before replacement. Match terminals (R, C, Y, G, W/O/B). Many smart stats need a C wire—use an add‑a‑wire kit or new cable when needed.
`,
    es: `
Conceptos básicos
- El termostato mide la temperatura ambiente y ordena enfriar/calentar. Tipos: mecánicos, digitales simples y programables/inteligentes.

Ubicación
- En pared interior, lejos de sol directo, rejillas de suministro, cocinas y puertas. Altura ~1,5 m. Corrientes de aire o calor radiante causan lecturas erróneas.

Fallos comunes
- Ciclos cortos por mala ubicación; cables flojos; ajuste incorrecto de anticipador o ciclos por hora; baterías agotadas.

Cableado
- Etiqueta cables antes de cambiar. Respeta terminales (R, C, Y, G, W/O/B). Muchos modelos “smart” requieren cable C—usa adaptador o tira nuevo cable.
`
  },
  {
    slug: 'electronic-controls',
    en: `
What they are
- Control boards coordinate compressor, fans, sensors, and protections. Sensors include thermistors, pressure switches, and flow/level devices.

Power and grounding
- Use stable supply and proper grounding to reduce nuisance trips. Separate high‑power wiring from low‑voltage signal lines.

Diagnostics
- Check LEDs/error codes; verify sensor ohms vs. temperature chart; inspect relays and cold solder joints.

ESD and handling
- Use anti‑static strap; avoid touching component pins; never probe live boards unless procedure requires and you are trained.
`,
    es: `
Qué son
- Las placas de control coordinan compresor, ventiladores, sensores y protecciones. Sensores típicos: termistores, presostatos y detectores de flujo/nivel.

Alimentación y tierra
- Fuente estable y buena puesta a tierra reducen disparos falsos. Separa potencia de señales de baja tensión.

Diagnóstico
- Revisa LEDs/códigos; compara ohmios de sensores con tabla de temperatura; inspecciona relés y soldaduras frías.

ESD y manipulación
- Usa pulsera antiestática; no toques pines; evita medir en vivo salvo procedimiento específico y personal capacitado.
`
  },
  {
    slug: 'oils-lubes',
    en: `
Types
- Mineral: legacy compressors with CFC/HCFC refrigerants.
- POE: required for most HFC blends (e.g., R‑410A); very hygroscopic—keep sealed.
- PAG: automotive A/C; not for stationary systems unless specified.

Compatibility and handling
- Never mix unknown oils. Match to refrigerant and compressor model. Use sealed containers; limit exposure to air; replace oil after burnouts.

Practical tips
- Warm oil flows easier when charging large quantities. Label containers by refrigerant/oil type to avoid cross‑contamination.
`,
    es: `
Tipos
- Mineral: compresores antiguos con CFC/HCFC.
- POE: requerido en la mayoría de mezclas HFC (p. ej., R‑410A); muy higroscópico—mantener sellado.
- PAG: A/A automotriz; no usar en sistemas fijos salvo especificación.

Compatibilidad y manejo
- No mezcles aceites desconocidos. Empareja con refrigerante y modelo de compresor. Envases sellados; mínima exposición al aire; reemplaza tras quemado.

Consejos prácticos
- Calentar ligeramente el aceite ayuda a mover grandes volúmenes. Etiqueta envases por tipo para evitar contaminación cruzada.
`
  },
  {
    slug: 'motors-fans',
    en: `
Overview
- PSC vs. ECM: PSC is simple and robust; ECM offers variable speed and higher efficiency but needs clean power and correct programming.

Airflow factors
- Blade pitch and diameter set load; wrong wheel or dirty blades reduce capacity. Keep coils clean so motors do not over‑amp.

Maintenance
- Inspect bearings, set‑screws, and mounts. Check microfarads on run capacitors for PSC motors; update firmware/profiles on ECM when applicable.

Safety
- Disconnect power; beware of sharp fins. Support heavy assemblies when removing blower housings.
`,
    es: `
Resumen
- PSC vs. ECM: PSC es simple y robusto; ECM permite velocidad variable y mayor eficiencia pero requiere alimentación estable y programación correcta.

Factores de flujo
- Paso y diámetro de las aspas determinan la carga; una turbina incorrecta o sucia reduce la capacidad. Mantén serpentines limpios para evitar sobreconsumo del motor.

Mantenimiento
- Revisa rodamientos, prisioneros y soportes. Mide microfaradios de capacitores en PSC; en ECM actualiza firmware/perfiles cuando aplique.

Seguridad
- Desconecta la alimentación; cuidado con aletas cortantes. Soporta el conjunto al desmontar caracolas de soplador.
`
  },
  {
    slug: 'tools-accessories',
    en: `
Core toolkit
- Manifold gauge set (or digital gauges) rated for the refrigerant/pressure.
- Vacuum pump with fresh oil; micron gauge to measure true vacuum.
- Scale for accurate charging; recovery machine and recovery cylinder.
- Hoses with low loss fittings; core remover tool; nitrogen cylinder with regulator for pressure tests and brazing purge.
- PPE: safety glasses, gloves, and hearing protection when needed.

Good practices
- Purge hoses with refrigerant before connecting to minimize air.
- Always weigh charges; blends must be added as liquid to avoid fractionation.
- Keep pump oil clean; change when it turns cloudy or after a burnout job.
`,
    es: `
Kit básico
- Juego de manómetros (o digitales) homologados para el refrigerante/presión.
- Bomba de vacío con aceite limpio; micrómetro para medir vacío real.
- Balanza para cargas precisas; recuperadora y cilindro de recuperación.
- Mangueras con válvulas de baja pérdida; extractor de vástagos; nitrógeno con regulador para pruebas y purga al soldar.
- EPP: gafas, guantes y protección auditiva cuando aplique.

Buenas prácticas
- Purgar mangueras con refrigerante antes de conectar para minimizar aire.
- Siempre cargar por peso; las mezclas deben agregarse en fase líquida para evitar fraccionamiento.
- Mantén el aceite de la bomba limpio; cámbialo si se enturbia o tras trabajos de quemado.
`
  },
  {
    slug: 'refrigerants-r134a',
    en: `
Profile
- Widely used in domestic refrigeration and some chillers. Moderate pressures; typically uses mineral or POE oil depending on compressor model.

Notes
- Retrofit from R‑12 requires POE oil and seal compatibility checks. Efficiency depends on condenser cleanliness and airflow.

Handling
- Charge as liquid with scale. Avoid mixing with other blends; label systems clearly.
`,
    es: `
Perfil
- Muy usado en refrigeración doméstica y algunos enfriadores. Presiones moderadas; usa aceite mineral o POE según el compresor.

Notas
- En retrofit desde R‑12 requiere aceite POE y revisar compatibilidad de sellos. La eficiencia depende de serpentines limpios y buen flujo de aire.

Manejo
- Carga en fase líquida y por peso. Evita mezclas con otros refrigerantes; etiqueta claramente el sistema.
`
  },
  {
    slug: 'refrigerants-r410a',
    en: `
Profile
- High‑pressure HFC blend used in many split AC systems. Requires POE oil and components rated for high pressure.

Charging
- Add as liquid and by weight. Common method: target subcooling with TXV or weigh‑in per nameplate.

Safety
- Pressures are significantly higher than R‑22—verify tools and hoses are rated accordingly. Purge with nitrogen when brazing.
`,
    es: `
Perfil
- Mezcla HFC de alta presión usada en muchos equipos de A/A. Requiere aceite POE y componentes homologados para alta presión.

Carga
- Agregar en fase líquida y por peso. Método común: subenfriamiento objetivo con TXV o carga por placa.

Seguridad
- Las presiones son mucho mayores que en R‑22—verifica que herramientas y mangueras estén certificadas. Purgar con nitrógeno al soldar.
`
  },
  {
    slug: 'refrigerants-r404a',
    en: `
Profile
- Blend for low/medium‑temperature commercial systems. Has temperature glide.

Considerations
- Charge as liquid to avoid composition shift. TXV selection and superheat must consider glide. Environmental rules restrict new uses in some regions.
`,
    es: `
Perfil
- Mezcla para baja/media temperatura en refrigeración comercial. Presenta glide (deslizamiento de temperatura).

Consideraciones
- Cargar en fase líquida para evitar cambio de composición. La selección de TXV y el sobrecalentamiento deben considerar el glide. Existen restricciones ambientales en varios países.
`
  },
  {
    slug: 'refrigerants-r22',
    en: `
Status
- R‑22 is an HCFC being phased out in many regions. New production is limited or banned; reclaimed supplies are used for legacy systems.

Alternatives
- Retrofits may use R‑407C, R‑422D or others; performance and oil requirements differ. Evaluate capacity change and label clearly after conversion.

Service notes
- Avoid topping off with mixed blends. Plan long‑term replacement of equipment to reduce cost and environmental impact.
`,
    es: `
Estado
- El R‑22 es un HCFC en retirada en muchas regiones. La producción nueva está limitada o prohibida; se usa refrigerante recuperado para equipos existentes.

Alternativas
- En retrofits se emplean R‑407C, R‑422D u otros; cambian desempeño y requisitos de aceite. Evalúa variación de capacidad y etiqueta claramente tras la conversión.

Notas de servicio
- Evita “completar” con mezclas diferentes. Planifica el reemplazo del equipo a mediano plazo para reducir costos e impacto ambiental.
`
  },
  {
    slug: 'leak-detection',
    en: `
Approaches
- Electronic leak detectors (heated diode/infrared), UV dye with lamp, soap solution, and nitrogen pressure tests.

Process
- Start with visual inspection; pressurize with nitrogen (per rating) and use bubbles; confirm with electronic detector. After repair, pull deep vacuum and verify decay hold.

Safety
- Never use oxygen for pressure tests. Ventilate enclosed spaces when working with refrigerants.
`,
    es: `
Métodos
- Detectores electrónicos (diodo caliente/infrarrojo), tinte UV con lámpara, solución jabonosa y pruebas con nitrógeno.

Proceso
- Comienza con inspección visual; presuriza con nitrógeno (según especificación) y usa solución jabonosa; confirma con detector electrónico. Tras reparar, realiza vacío profundo y prueba de caída de presión.

Seguridad
- Nunca uses oxígeno para pruebas. Ventila espacios cerrados al trabajar con refrigerantes.
`
  },
  {
    slug: 'superheat-subcool',
    en: `
Why it matters
- Superheat ensures vapor at the compressor inlet; subcool ensures a full liquid column to the metering device.

How to measure
- Superheat = suction line temperature minus saturation temperature at suction pressure. Subcool = saturation temperature at condensing pressure minus liquid line temperature.

Targets (typical)
- TXV systems: superheat ~8–12°F (4–7°C) and subcool per nameplate (8–15°F common). Fixed orifice systems: use charging charts vs. outdoor/indoor conditions.
`,
    es: `
Por qué importa
- El sobrecalentamiento asegura vapor en la succión; el subenfriamiento asegura columna líquida hasta la válvula de expansión.

Cómo medir
- Sobrecalentamiento = temperatura de la línea de succión menos la temperatura de saturación según la presión de succión. Subenfriamiento = temperatura de saturación a la presión de condensación menos la temperatura de la línea de líquido.

Objetivos (típicos)
- Sistemas con TXV: sobrecalentamiento ~4–7°C y subenfriamiento según placa (8–15°F comunes). Orificio fijo: usa tablas de carga según condiciones interior/exterior.
`
  },
  {
    slug: 'evap-condenser-coils',
    en: `
Care and effects
- Dirty coils reduce heat transfer and force higher pressures/amps. Bent fins block airflow.

Maintenance
- Use soft brush and coil cleaner appropriate for aluminum/copper. Comb fins gently to restore airflow. Keep plants and debris away from outdoor units.

Symptoms
- High head pressure with clean condenser fan; low capacity; uneven frost patterns on evaporator.
`,
    es: `
Cuidado y efectos
- Serpentines sucios empeoran el intercambio de calor y elevan presiones y consumo. Aletas dobladas restringen el flujo.

Mantenimiento
- Usa cepillo suave y limpiador adecuado para aluminio/cobre. Endereza aletas con peine para recuperar el flujo. Mantén despejada el área exterior.

Síntomas
- Alta presión de descarga con ventilador bien; baja capacidad; patrones de escarcha irregulares en evaporador.
`
  },
  {
    slug: 'defrost-methods',
    en: `
Why defrost
- Frost insulates the evaporator and blocks airflow. Defrost methods remove ice to restore capacity.

Methods
- Time‑initiated/temperature‑terminated: simple, common in freezers.
- Temperature sensors with timers: adaptive frequency.
- Demand defrost: triggered by temperature/pressure/energy models—saves energy.

Checks
- Verify heaters/valves continuity, defrost termination sensor, and drainage. Replace faulty bimetals or relays.
`,
    es: `
Por qué deshelar
- La escarcha aísla el evaporador y bloquea el aire. Los métodos de deshielo eliminan hielo y recuperan la capacidad.

Métodos
- Por tiempo con terminación por temperatura: simple, común en congeladores.
- Sensores de temperatura con temporizador: frecuencia adaptativa.
- Deshielo por demanda: se activa por temperatura/presión/modelos de energía—ahorra consumo.

Revisiones
- Verifica continuidad de resistencias/válvulas, sensor de terminación y drenaje. Cambia bimetálicos o relés defectuosos.
`
  },
  {
    slug: 'safety-basics',
    en: `
Core points
- Wear PPE (gloves, eye protection). Ventilate when handling refrigerants. Respect electrical lockout/tagout.
- Use recovery machines—do not vent refrigerants. Follow local regulations.
- Cylinders: store upright, secure in transport, check hydrostatic test date.
`,
    es: `
Puntos clave
- Usa EPP (guantes, protección ocular). Ventila al manipular refrigerantes. Respeta bloqueo/etiquetado eléctrico.
- Usa recuperadoras—no ventiles refrigerantes. Cumple la normativa local.
- Cilindros: almacénalos verticales, asegúralos en transporte, verifica fecha de prueba hidrostática.
`
  },
  {
    slug: 'charging-procedures',
    en: `
Methods
- Weigh‑in per nameplate after full recovery and evacuation.
- TXV systems: adjust to target subcooling.
- Fixed orifice: charge by superheat chart.

Records and leaks
- Record ambient and line temperatures/pressures. Always leak check before and after charging.
`,
    es: `
Métodos
- Carga por peso según placa tras recuperar y evacuar.
- Con TXV: ajusta al subenfriamiento objetivo.
- Orificio fijo: usa tabla de sobrecalentamiento.

Registros y fugas
- Anota temperaturas/presiones y condiciones ambientales. Verifica fugas antes y después de cargar.
`
  },
  {
    slug: 'vacuum-best-practices',
    en: `
Targets
- Pull to below 500 microns for most systems, verify with decay test; under 200–300 microns for critical systems.

Setup
- Use large hoses directly on service ports or cores removed; avoid manifold restrictions. Fresh pump oil.

Tips
- Isolate pump and watch micron rise (decay) to diagnose moisture/leaks. Heat the system gently to drive out moisture.
`,
    es: `
Objetivos
- Baja a menos de 500 micrones en la mayoría de sistemas y verifica con prueba de elevación; 200–300 micrones en sistemas críticos.

Montaje
- Usa mangueras gruesas directo a puertos o con vástagos retirados; evita restricciones del múltiple. Aceite fresco en la bomba.

Consejos
- Aísla la bomba y observa la subida de micrones para detectar humedad/fugas. Aplica calor suave para expulsar humedad.
`
  },
  {
    slug: 'system-documentation',
    en: `
What to keep
- Nameplates photos, wiring diagrams, refrigerant and oil types, baseline readings, service dates, and parts replaced.

Benefits
- Faster troubleshooting, consistent charging targets, and warranty support.

Tools
- Use a simple digital log (spreadsheets or CMMS) and attach photos. Label panels with QR code to access records.
`,
    es: `
Qué registrar
- Fotos de placas y diagramas, tipo de refrigerante y aceite, lecturas base, fechas de servicio y repuestos cambiados.

Beneficios
- Diagnóstico más rápido, objetivos de carga coherentes y soporte de garantía.

Herramientas
- Usa un registro digital simple (hoja de cálculo o CMMS) y adjunta fotos. Etiqueta tableros con código QR para acceder al historial.
`
  }

]


