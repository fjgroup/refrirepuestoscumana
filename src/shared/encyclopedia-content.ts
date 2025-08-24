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
  }
]

