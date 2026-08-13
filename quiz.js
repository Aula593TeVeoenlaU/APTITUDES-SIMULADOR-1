// ==========================
// SIMULADOR DE INGRESO
// ==========================

// Preguntas (ACTUALIZADAS A 20 PREGUNTAS DISTRIBUIDAS EN 5 MÓDULOS)
const questions = [
    // --- BIOLOGÍA ---
    { id: 1, block: 'BIOLOGÍA', text: '¿Cuál es la función principal del ciclo celular?', options: ['a) Generar energía para la célula.', 'b) Regular la división y el crecimiento celular.', 'c) Eliminar las células envejecidas.', 'd) Sintetizar proteínas estructurales.'], answer: 'b' },
    { id: 2, block: 'BIOLOGÍA', text: '¿En qué fase del ciclo celular se replica el ADN?', options: ['a) S', 'b) G1', 'c) G2', 'd) M'], answer: 'a' },
    { id: 3, block: 'BIOLOGÍA', text: 'El experimento de Stanley Miller y Harold Urey fue crucial en el estudio del origen de la vida porque:', options: ['a) Refutó la teoría de la generación espontánea usando matraces de cuello de cisne.', 'b) Comprobó la teoría de la panspermia al encontrar aminoácidos en un meteorito.', 'c) Demostró que moléculas orgánicas (como aminoácidos) podían formarse a partir de precursores inorgánicos en la Tierra primitiva.', 'd) Estableció la teoría de la evolución química propuesta por Oparin, creando las primeras células vivas (coacervados).'], answer: 'c' },
    { id: 4, block: 'BIOLOGÍA', text: '¿Cuál fue el mayor aporte de los postulados de Koch?', options: ['a) Determinar las condiciones para el cultivo de un virus.', 'b) Establecer la relación causal entre un microorganismo y una enfermedad', 'c) Clasificar microorganismos según su morfología.', 'd) Explicar la transferencia de genes entre bacterias.'], answer: 'b' },
{ id: 5, block: 'BIOLOGÍA', text: 'En la clasificación taxonómica moderna, las bacterias y arqueas se diferencian principalmente por:', options: ['a) La forma celular y el tipo de nutrición.', 'b) La presencia de núcleo definido.', 'c) El tipo de reproducción sexual.', 'd) La composición de la pared celular y el ARN ribosomal.'], answer: 'd' },
{ id: 6, block: 'BIOLOGÍA', text: 'Las enzimas aceleran las reacciones químicas en las células sin consumirse durante el proceso. ¿Cómo logran aumentar la velocidad de reacción?', options: ['a) Aumentando la temperatura del medio.', 'b) Disminuyendo la energía de activación necesaria para que ocurra la reacción.', 'c) Incrementando la cantidad de sustrato disponible.', 'd) Transformándose en productos intermedios de la reacción.'], answer: 'b' },
{ id: 7, block: 'BIOLOGÍA', text: 'Cuando una mutación genética otorga ventaja a un organismo en su ambiente, y dicha característica se transmite a su descendencia, el proceso involucrado es:', options: ['a) Adaptación fisiológica.', 'b) Selección natural.', 'c) Herencia de caracteres adquiridos.', 'd) Reproducción diferencial.'], answer: 'b' },
{ id: 8, block: 'BIOLOGÍA', text: '¿Qué característica distingue a los virus de los organismos vivos?', options: ['a) Poseen ribosomas para sintetizar proteínas.', 'b) Son organismos autótrofos.', 'c) Se reproducen por mitosis.', 'd) Pueden replicarse solo dentro de una célula huésped.'], answer: 'd' },
{ id: 9, block: 'BIOLOGÍA', text: '¿Cuál de las siguientes constituye una evidencia embriológica de la evolución?', options: ['a) Las semejanzas en las fases de desarrollo de vertebrados distintos.', 'b) La existencia de estructuras vestigiales.', 'c) La formación de fósiles marinos.', 'd) La comparación del ADN mitocondrial.'], answer: 'a' },
{ id: 10, block: 'BIOLOGÍA', text: '¿Qué es un alelo?', options: ['a) Una mutación del ADN.', 'b) Una forma alternativa de un mismo gen', 'c) Un conjunto de proteínas.', 'd) Un tipo de célula sexual.'], answer: 'b' },
{ id: 11, block: 'BIOLOGÍA', text: '¿Cuál de las siguientes moléculas es un lípido anfipático y componente esencial de la bicapa que forma las membranas celulares?', options: ['a) Triglicéridos.', 'b) Colesterol.', 'c) Fosfolípidos.', 'd) Ácidos grasos.'], answer: 'c' },
{ id: 12, block: 'BIOLOGÍA', text: 'Al examinar un grupo de células en el microscopio, y observar que el material genético no está limitado por una membrana en el citoplasma, puede concluirse que es una célula:', options: ['a) Procariótica.', 'b) Fúngica.', 'c) Animal.', 'd) Vegetal.'], answer: 'a' },
{ id: 13, block: 'BIOLOGÍA', text: 'En una cadena alimenticia, los organismos descomponedores cumplen la función de:', options: ['a) Convertir la energía solar en materia orgánica.', 'b) Transferir energía entre niveles tróficos.', 'c) Reciclar la materia orgánica y devolver nutrientes al suelo.', 'd) Controlar las poblaciones de depredadores.'], answer: 'c' },
{ id: 14, block: 'BIOLOGÍA', text: 'Desde un punto de vista ecológico: ¿Cuál de las afirmaciones sobre poblaciones y comunidades es VERDADERA?', options: ['a) Una comunidad no posee factores bióticos.', 'b) La población abarca distintos ecosistemas.', 'c) Población y comunidad son términos equivalentes en ecología.', 'd) La comunidad incluye diferentes poblaciones que interactúan en un mismo lugar.'], answer: 'd' },
{ id: 15, block: 'BIOLOGÍA', text: 'Durante el metabolismo energético, ¿cuál de los siguientes procesos permite a la célula obtener la mayor cantidad de ATP a partir de una molécula de glucosa?', options: ['a) La glucólisis en el citoplasma.', 'b) La fermentación láctica en condiciones de baja disponibilidad de oxígeno.', 'c) La fosforilación oxidativa en la cadena de transporte de electrones mitocondrial.', 'd) El ciclo de Calvin durante la fotosíntesis.'], answer: 'c' },
{ id: 16, block: 'BIOLOGÍA', text: 'Según la clasificación biológica moderna, el sistema de tres dominios se basa principalmente en', options: ['a) El tipo de reproducción y nutrición.', 'b) Diferencias en la secuencia del ARN ribosomal.', 'c) El tipo de hábitat de los organismos.', 'd) La morfología de las células.'], answer: 'b' },
{ id: 17, block: 'BIOLOGÍA', text: '¿Cuál es la principal diferencia entre mitosis y meiosis?', options: ['a) La meiosis ocurre solo en células somáticas.', 'b) La mitosis genera variabilidad genética.', 'c) La meiosis produce células haploides y la mitosis diploides.', 'd) Ambas generan el mismo tipo de célula.'], answer: 'c' },
{ id: 18, block: 'BIOLOGÍA', text: '¿Cuál de los siguientes es un ejemplo de enfermedad hereditaria recesiva?', options: ['a) Hemofilia', 'b) Síndrome de Down.', 'c) Diabetes tipo II.', 'd) Hipertensión arterial.'], answer: 'a' },
{ id: 19, block: 'BIOLOGÍA', text: 'La diversidad ecológica se refiere a:', options: ['a) El número de individuos de una población.', 'b) La variación genética dentro de una especie.', 'c) La variedad de ecosistemas, comunidades y especies en una región.', 'd) La cantidad de recursos energéticos en un hábitat.'], answer: 'c' },
{ id: 20, block: 'BIOLOGÍA', text: 'Durante la fotosíntesis, Durante un periodo de ayuno prolongado (más de 24 horas), ¿cuál de los siguientes procesos metabólicos se activa en el hígado humano para suministrar energía a los tejidos periféricos y al cerebro?', options: ['a) La glucólisis y la síntesis de glucógeno.', 'b) La glucogenólisis como única fuente de glucosa sanguínea.', 'c) La gluconeogénesis y la cetogénesis a partir de sustratos no glúcidos  .', 'd) La lipogénesis de novo para almacenar ácidos grasos libres.'], answer: 'c' },


    // --- ANATOMÍA ---
    { id: 21, block: 'ANATOMÍA', text: '¿Los huesos de acuerdo a su composición se clasifican en?', options: ['a) Alargado, sesamoideo.', 'b) Plano, irregular', 'c) Irregulares, regulares', 'd) Esponjosos y compactos'], answer: 'd' },
    { id: 22, block: 'ANATOMÍA', text: '¿Qué órgano del sistema digestivo secreta enzimas digestivas como la amilasa y la lipasa?', options: ['a) Hígado', 'b) Páncreas', 'c) Estómago', 'd) Intestino delgado'], answer: 'b' },
    { id: 23, block: 'ANATOMÍA', text: '¿Qué vaso sanguíneo, en un adulto sano, transporta sangre con la MÁS ALTA concentración de oxígeno hacia el corazón?', options: ['a) La arteria Aorta', 'b) La arteria Pulmonar', 'c) La vena Cava Superior', 'd) La vena Pulmonar.'], answer: 'd' },
    { id: 24, block: 'ANATOMÍA', text: 'Desde el punto de vista histológico, ¿qué tipo de tejido muscular compone el corazón?', options: ['a) Estriado cardíaco', 'b) Liso', 'c) Estriado esquelético', 'd) Esfinteriano'], answer: 'a' },
    { id: 25, block: 'ANATOMÍA', text: 'La digestión química de las proteínas comienza principalmente en...', options: ['a) La boca, por la acción de la amilasa salival.', 'b) El duodeno, por la acción de la tripsina.', 'c) El estómago, por la acción de la pepsina.', 'd) El hígado, por la producción de bilis.'], answer: 'c' },
   { id: 26, block: 'ANATOMÍA', text: '¿Qué tipo de vasos sanguíneos se encargan de llevar sangre rica en oxígeno desde el corazón hacia los tejidos?', options: ['a) Venas', 'b) Capilares', 'c) Arterias', 'd) Válvulas'], answer: 'c' },
   { id: 27, block: 'ANATOMÍA', text: 'En posición anatómica, una estructura ubicada más cerca de la línea media del cuerpo se describe como:', options: ['a) Lateral', 'b) Medial', 'c) Distal', 'd) Superficial'], answer: 'b' },
   { id: 28, block: 'ANATOMÍA', text: '¿Cuál de los siguientes huesos forma parte del esqueleto axial?', options: ['a) Esternón', 'b) Húmero', 'c) Fémur', 'd) Radio'], answer: 'a' },
{ id: 29, block: 'ANATOMÍA', text: 'Un paciente sufre un traumatismo craneoencefálico que daña gravemente su lóbulo frontal. ¿Qué aspecto de su función cognitiva o comportamiento se vería más probablemente afectado de forma directa?', options: ['a) La percepción del tacto, la presión y la temperatura.', 'b) El procesamiento primario de la información auditiva.', 'c) La regulación de funciones vitales involuntarias como la respiración y el ritmo cardíaco.', 'd) La capacidad para planificar, tomar decisiones y regular sus impulsos.'], answer: 'd' },
{ id: 30, block: 'ANATOMÍA', text: '¿Cuál de las siguientes opciones describe mejor la función global integradora del sistema nervioso?', options: ['a) Regular exclusivamente las funciones autónomas como la temperatura.', 'b) Generar fuerza para el movimiento del esqueleto.', 'c) Recibir estímulos, procesar la información y generar una respuesta coordinada.', 'd) Transportar oxígeno y nutrientes a los tejidos motores.'], answer: 'c' },
{ id: 31, block: 'ANATOMÍA', text: 'El sistema nervioso autónomo se divide en simpático y parasimpático. ¿Cuál es una característica principal de la activación del sistema parasimpático?', options: ['a) Estimulación de la digestión y salivación.', 'b) Dilatación de las pupilas (midriasis).', 'c) Aumento de la frecuencia cardíaca.', 'd) Liberación de glucosa por el hígado'], answer: 'a' },
{ id: 32, block: 'ANATOMÍA', text: '¿Qué cavidad del corazón recibe la sangre oxigenada proveniente de los pulmones?', options: ['a) Aurícula derecha.', 'b) Ventrículo derecho', 'c) Ventrículo izquierdo', 'd) Aurícula izquierda'], answer: 'd' },
{ id: 33, block: 'ANATOMÍA', text: '¿En qué estructura del sistema respiratorio ocurre principalmente el intercambio de oxígeno y dióxido de carbono entre el aire y la sangre?', options: ['a) Tráquea.', 'b) Bronquios principales', 'c) Alvéolos pulmonares', 'd) Laringe'], answer: 'c' },
{ id: 34, block: 'ANATOMÍA', text: '¿Cuál es la unidad estructural y funcional del riñón encargada de filtrar la sangre y formar la orina?', options: ['a) Uréter.', 'b) Nefrona', 'c) Pelvis renal', 'd) Cápsula suprarrenal'], answer: 'b' },
{ id: 35, block: 'ANATOMÍA', text: '¿Qué estructura del encéfalo se encarga principalmente de la coordinación motora, el equilibrio y la precisión de los movimientos voluntarios?', options: ['a) Cerebelo.', 'b) Hipotálamo', 'c) Bulbo raquídeo', 'd) Lóbulo occipital'], answer: 'a' },
{ id: 36, block: 'ANATOMÍA', text: '¿Qué glándula endocrina produce la hormona adrenalina?', options: ['a) Glándula pituitaria.', 'b) Glándula tiroides', 'c) Glándula suprarrenal', 'd) Páncreas'], answer: 'c' },
{ id: 37, block: 'ANATOMÍA', text: '¿Qué es la homeostasis?', options: ['a) La capacidad del cuerpo para mantener un entorno interno estable.', 'b)La capacidad del cuerpo para adaptarse a cambios sin regulación.', 'c) La capacidad del cuerpo para regular solo la temperatura corporal.', 'd) La capacidad del cuerpo para eliminar desechos metabólicos'], answer: 'a' },
{ id: 38, block: 'ANATOMÍA', text: '¿Cuál es el tipo de tejido animal que se caracteriza por tener una función de almacenamiento de energía y nutrientes?', options: ['a) Tejido conectivo', 'b) Tejido adiposo.', 'c) Tejido muscular.', 'd) Tejido nervioso'], answer: 'b' },
{ id: 39, block: 'ANATOMÍA', text: '¿Cuál es el tipo de tejido animal que se caracteriza por tener una función de protección y defensa contra lesiones e infecciones?', options: ['a) Tejido epitelial', 'b) Tejido conectivo.', 'c) Tejido muscular', 'd) Tejido nervioso'], answer: 'a' },
{ id: 40, block: 'ANATOMÍA', text: '¿En qué estructura específica del sistema digestivo ocurre la absorción de la gran mayoría de los nutrientes hacia el torrente sanguíneo?', options: ['a) Las paredes del estómago.', 'b) La mucosa del intestino grueso.', 'c) El conducto biliar.', 'd) Las vellosidades del intestino delgado.'], answer: 'd' },

    // --- QUIMICA ---


{ id: 41, block: 'QUÍMICA', text: 'De las siguientes tres proposiciones, ¿cuántas son incorrectas?<br><br>I. Los compuestos pueden separarse en sus constituyentes mediante procesos físicos.<br>II. El cloruro de sodio, NaCl es una sustancia molecular.<br>III. El agua de mar y el petróleo son compuestos.', options: ['a) solo I', 'b) I y II', 'c) solo II', 'd) I, II y III'], answer: 'd' },
{ id: 42, block: 'QUÍMICA', text: 'Son fenómemos químicos<br><br>I. Combustión.<br>II. Dilatación.<br>III. Sublimación.<br>IV. Reacción del zinc con ácido muriático.', options: ['a) I y II', 'b) II y IV', 'c) III y IV', 'd) I, IV'], answer: 'd' },
{ id: 43, block: 'QUÍMICA', text: 'Señale verdadero (V) o (Falso) según corresponda.<br><br>• Una mezcla homogénea es monofásica.<br>• El diamante y el grafito son formas alotrópicas del carbono<br>• Una mezcla de mercurio y agua se puede separar por decantación.', options: ['a) FVV', 'b) VVV', 'c) FVF', 'd) FFF'], answer: 'b' },
{ id: 44, block: 'QUÍMICA', text: 'Para dos isótopos de un elemento, se cumple que la suma de neutrones es 38 y la suma de sus números de masa es 72. Halle la carga nuclear del elemento.', options: ['a) 10', 'b) 35', 'c) 17', 'd) 25'], answer: 'c' },

{ 
    id: 45, 
    block: 'QUÍMICA', 
    text: 'Para el catión: <span style="display:inline-block; vertical-align:middle; line-height:1;"><sup style="display:block;">127</sup><sub style="display:block;">51</sub></span>Sb<sup>+3</sup>, indique las proposiciones correctas.<br><br>I. Posee 76 neutrones<br>II. El átomo neutro posee 51 electrones<br>III. El núcleo atómico posee 48 protones<br>IV. El catión posee 175 partículas subatómicas fundamentales', 
    options: ['a) I y II', 'b) II y III', 'c) I, II y IV', 'd) I, II y III'], 
    answer: 'c' 
},

{ 
    id: 46, 
    block: 'QUÍMICA', 
    text: 'El desarrollo del Modelo Mecano-Cuántico (o Modelo de Nube Electrónica) fue necesario porque el modelo de Bohr:', 
    options: ['a) Establecía órbitas elípticas en lugar de circulares para el movimiento del electrón.', 'b) Establecía que los átomos eran indivisibles e inmutables, lo cual fue refutado experimentalmente.', 'c) No podía explicar la existencia de los protones en el núcleo.', 'd) No podía explicar los espectros de emisión y absorción de átomos con más de un electrón (multielectrónicos).'], 
    answer: 'd' 
},
{ 
    id: 47, 
    block: 'QUÍMICA', 
    text: 'Respecto al Principio de Exclusión de Pauli y la descripción de los electrones en un átomo polielectrónico, ¿qué proposición es correcta?', 
    options: ['a) Este principio establece que, en un mismo átomo, dos electrones no pueden tener el mismo valor del número cuántico principal (n).', 'b) El principio de Pauli se aplica únicamente a los electrones de valencia y no a los electrones de las capas internas (electrones de carozo).', 'c) El principio afirma que dos electrones pueden coexistir en el mismo orbital solo si tienen espines opuestos (diferente número cuántico de espín, m<sub>s</sub>).', 'd) La consecuencia directa del principio es que un mismo orbital atómico puede ser ocupado por un máximo de tres electrones.'], 
    answer: 'c' 
},
{ 
    id: 48, 
    block: 'QUÍMICA', 
    text: 'Según la regla de las diagonales (método gráfico para determinar el orden de llenado de los orbitales atómicos), ¿cuál es el orden correcto de llenado de los siguientes orbitales?', 
    options: ['a) 1s → 2p → 2s', 'b) 2s → 2p → 3s', 'c) 3p → 3d → 4s', 'd) 4s → 3p → 3d'], 
    answer: 'b' 
},

{ 
    id: 49, 
    block: 'QUÍMICA', 
    text: 'La regla general de la química que establece que "lo similar disuelve a lo similar" se basa principalmente en la semejanza de:', 
    options: ['a) Los tamaños atómicos de las partículas.', 'b) La densidad de soluto y disolvente.', 'c) Las fuerzas y características de polaridad e intermoleculares.', 'd) El pH (acidez o basicidad) de soluto y disolvente.'], 
    answer: 'c' 
},
{ 
    id: 50, 
    block: 'QUÍMICA', 
    text: 'La configuración electrónica de un átomo neutro en su estado basal es 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>2</sup>. A partir de esta única información deduzca en el orden respectivo:<br><br>I. Número de electrones no apareados.<br>II. Número de electrones en la capa de valencia.<br>III. Número atómico.', 
    options: ['a) 4 ; 4 ; 14', 'b) 2 ; 4 ; 14', 'c) 3 ; 2 ; 14', 'd) 3 ; 6 ; 28'], 
    answer: 'b' 
},
{ 
    id: 51, 
    block: 'QUÍMICA', 
    text: 'Respecto a la estructura de la tabla periódica actual (IUPAC), indique la proposición correcta:', 
    options: ['a) Los elementos de un mismo periodo presentan propiedades químicas similares.', 'b) Está organizada en 18 grupos numerados y 7 periodos.', 'c) Los gases nobles se ubican en el bloque s de la tabla.', 'd) La serie de actínidos se clasifica como metales representativos.'], 
    answer: 'b' 
},
{ 
    id: 52, 
    block: 'QUÍMICA', 
    text: 'Indique Verdadero (V) o Falso (F), según corresponda:<br><br>I. En la tabla periódica, los metales son más numerosos que los no metales.<br>II. Los no metales pueden encontrarse en estado sólido, líquido o gaseoso a temperatura ambiente.<br>III. Todo metal es siempre más duro que cualquier no metal.<br>IV. Los lantánidos pertenecen al bloque f de la tabla periódica.', 
    options: ['a) VVVF', 'b) VVFV', 'c) VFVF', 'd) FVVF'], 
    answer: 'b' 
},

{ 
    id: 53, 
    block: 'QUÍMICA', 
    text: 'El valor de la masa atómica de un elemento que aparece en la tabla periódica corresponde a un promedio _______ de las masas de los _______ que se encuentran de forma natural en la corteza terrestre.', 
    options: ['a) geométrico - isótopos', 'b) aritmético - alótropos', 'c) ponderado - isómeros', 'd) ponderado - isótopos'], 
    answer: 'd' 
},
{ 
    id: 54, 
    block: 'QUÍMICA', 
    text: 'Considere la combinación de los elementos X (Z = 20) y Y (Z = 17) para formar un compuesto. El compuesto formado por la combinación de X y Y tendrá las siguientes características:<br><br>I. Ser un compuesto binario diatómico.<br>II. Ser un compuesto iónico.<br>III. Ser un compuesto covalente no polar.<br>IV. Ser soluble en agua.<br>V. Ser un compuesto covalente polar.<br><br>¿Qué opciones son correctas para el compuesto formado?', 
    options: ['a) II y III', 'b) I y II', 'c) II y IV', 'd) III y V'], 
    answer: 'c' 
},
{ 
    id: 55, 
    block: 'QUÍMICA', 
    text: 'Indique cuál es una molécula polar. Se indica entre paréntesis su geometría molecular.', 
    options: ['a) CHCl<sub>3</sub> (tetraédrica)', 'b) BCl<sub>3</sub> (trigonal plana)', 'c) BeCl<sub>2</sub> (lineal)', 'd) SiH<sub>4</sub> (tetraédrica)'], 
    answer: 'a' 
},
{ 
    id: 56, 
    block: 'QUÍMICA', 
    text: 'Escoja la opción que presenta los nombres sistemáticos correctos de los compuestos SO<sub>3</sub> y Cl<sub>2</sub>O<sub>7</sub>.', 
    options: ['a) Trióxido de azufre, heptaóxido de dicloro.', 'b) Sulfuro de oxígeno (III), cloruro de oxígeno (VII).', 'c) Trióxido de monoazufre, óxido de cloro.', 'd) Óxido de azufre, heptaóxido de dicloro.'], 
    answer: 'a' 
},
{ 
    id: 57, 
    block: 'QUÍMICA', 
    text: '¿Cuál fue el principal avance conceptual de la Teoría Atómica de Dalton sobre las ideas filosóficas previas de la antigua Grecia?', 
    options: ['a) Concluir que los átomos son divisibles y pueden transformarse en átomos de otro elemento mediante reacciones nucleares.', 'b) Demostrar experimentalmente la existencia de un núcleo central denso y positivo en el átomo.', 'c) Postular que la materia está compuesta de partículas elementales muy pequeñas llamadas electrones.', 'd) Introducir la idea de que los átomos de un mismo elemento son idénticos en masa y propiedades, y que se combinan en proporciones fijas.'], 
    answer: 'd' 
},

{ 
    id: 58, 
    block: 'QUÍMICA', 
    text: '¿Cuál es el estado de oxidación del cromo en el ácido dicrómico y del azufre en el ácido sulfúrico, respectivamente?', 
    options: ['a) +6 ; +4', 'b) +7 ; +6', 'c) +6 ; +6', 'd) +5 ; +6'], 
    answer: 'c' 
},

{ 
    id: 59, 
    block: 'QUÍMICA', 
    text: 'Correlacione cada ecuación química (numerada) con el tipo de reacción que describe (letrada).<br><br><table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;"><tr><th>Ecuación Química</th><th>Tipos de Reacción</th></tr><tr><td>I. Fe + CuSO<sub>4</sub> &rarr; FeSO<sub>4</sub> + Cu</td><td>a. Descomposición</td></tr><tr><td>II. 2KClO<sub>3</sub> &rarr; 2KCl + 3O<sub>2</sub></td><td>b. Combinación (Síntesis)</td></tr><tr><td>III. 2Mg + O<sub>2</sub> &rarr; 2MgO</td><td>c. Desplazamiento simple (Sustitución simple)</td></tr><tr><td>IV. AgNO<sub>3</sub> + NaCl &rarr; AgCl + NaNO<sub>3</sub></td><td>d. Desplazamiento doble (Metátesis)</td></tr></table>', 
    options: ['a) Ia, IIb, IIIc y IVd', 'b) Ic, IIa, IIIb y IVd', 'c) Ib, IIc, IIIa y IVd', 'd) Ic, IIb, IIIa y IVd'], 
    answer: 'b' 
},

{ 
    id: 60, 
    block: 'QUÍMICA', 
    text: 'Señale verdadero (V) o Falso (F) según corresponda sobre los orbitales atómicos:<br><ul><li>El subnivel <strong>d</strong> está compuesto por 5 orbitales.</li><li>La forma del orbital <strong>s</strong> es esférica.</li><li>Para que un orbital esté completo, necesita 2 electrones con el mismo espín.</li></ul>', 
    options: [
        'a) VFV', 
        'b) VVF', 
        'c) FVV', 
        'd) FFF'
    ], 
    answer: 'b' 
},

    // --- ESTADÍSTICA ---
    { 
    id: 61, 
    block: 'ESTADÍSTICA', 
    text: 'En un centro de salud se registró el número de pacientes atendidos durante 7 días consecutivos en el área de triaje:<br><br>18, 20, 21, 22, 23, 25, 82<br><br>Debido a que un día se presentó una emergencia comunitaria, el valor de 82 pacientes es considerado atípico. ¿Cuál de las siguientes medidas de tendencia central representa mejor el comportamiento habitual de la atención diaria?', 
    options: [
        'a) Media aritmética', 
        'b) Mediana', 
        'c) Moda', 
        'd) Rango'
    ], 
    answer: 'b' 
},
{ 
    id: 62, 
    block: 'ESTADÍSTICA', 
    text: 'Considere los siguientes datos: 10, 15, 16, Y, 20 y 22; si se conoce que la mediana es igual a 17, entonces el valor del dato Y es:', 
    options: [
        'a) 18', 
        'b) 19.5', 
        'c) 19', 
        'd) 17'
    ], 
    answer: 'a' 
},
{ 
    id: 63, 
    block: 'ESTADÍSTICA', 
    text: 'En una investigación sobre estudiantes de Ciencias de la Salud se registraron las siguientes variables: grupo sanguíneo, temperatura corporal, número de vacunas recibidas y nivel de dolor reportado como leve, moderado o severo.<br><br>¿Cuál de las siguientes variables es cuantitativa continua?', 
    options: [
        'a) Grupo sanguíneo', 
        'b) Temperatura corporal', 
        'c) Número de vacunas recibidas', 
        'd) Nivel de dolor: leve, moderado o severo'
    ], 
    answer: 'b' 
},
{ 
    id: 64, 
    block: 'ESTADÍSTICA', 
    text: 'En una encuesta de salud, se pregunta a los pacientes cómo califican la intensidad de su dolor: leve, moderado o severo.<br><br>¿Qué tipo de variable es la intensidad del dolor?', 
    options: [
        'a) Cuantitativa continua', 
        'b) Cuantitativa discreta', 
        'c) Cualitativa nominal', 
        'd) Cualitativa ordinal'
    ], 
    answer: 'd' 
},
{ 
    id: 65, 
    block: 'ESTADÍSTICA', 
    text: 'Un grupo de investigadores registra la edad, sexo, peso y presión arterial de pacientes atendidos en un centro de salud, sin aplicar ningún tratamiento ni modificar las condiciones de atención.<br><br>¿Qué tipo de estudio se describe principalmente?', 
    options: [
        'a) Experimental', 
        'b) Descriptivo', 
        'c) Ensayo clínico', 
        'd) Estudio de laboratorio'
    ], 
    answer: 'd' 
},

{ 
    id: 66, 
    block: 'ESTADÍSTICA', 
    text: 'Un investigador desea conocer el promedio de presión arterial sistólica de todos los estudiantes de primer semestre de Ciencias de la Salud de una universidad. Para ello, selecciona aleatoriamente a 80 estudiantes y mide su presión arterial.<br><br>¿Cuál es la muestra del estudio?', 
    options: [
        'a) Todos los estudiantes de la universidad', 
        'b) Todos los estudiantes de primer semestre de Ciencias de la Salud', 
        'c) Los 80 estudiantes seleccionados para la medición', 
        'd) Los estudiantes con presión arterial elevada'
    ], 
    answer: 'c' 
},
{ 
    id: 67, 
    block: 'ESTADÍSTICA', 
    text: 'En un centro de salud se registró el grupo sanguíneo de 40 pacientes. Los resultados fueron:<br><br>A: 14 pacientes<br><br>B: 8 pacientes<br><br>AB: 2 pacientes<br><br>O: 16 pacientes<br><br>¿Cuál es la frecuencia relativa del grupo sanguíneo O?', 
    options: [
        'a) 16 %', 
        'b) 25 %', 
        'c) 40 %', 
        'd) 60 %'
    ], 
    answer: 'c' 
},
{ 
    id: 68, 
    block: 'ESTADÍSTICA', 
    text: 'Se registraron las edades de cinco pacientes atendidos en consulta externa:<br><br>18, 22, 25, 30, 45<br><br>¿Cuál es el rango de edad del grupo?', 
    options: [
        'a) 27 años', 
        'b) 18 años', 
        'c) 23 años', 
        'd) 45 años'
    ], 
    answer: 'a' 
},
{ 
    id: 69, 
    block: 'ESTADÍSTICA', 
    text: 'En una campaña de tamizaje participaron 120 personas. De ellas, 30 presentaron niveles elevados de glucosa en sangre. Si se selecciona una persona al azar, ¿cuál es la probabilidad de que presente niveles elevados de glucosa?', 
    options: [
        'a) 15 %', 
        'b) 25 %', 
        'c) 30 %', 
        'd) 75 %'
    ], 
    answer: 'b' 
},
{ 
    id: 70, 
    block: 'ESTADÍSTICA', 
    text: 'Para analizar si existe una relación lineal o una correlación entre dos variables cuantitativas continuas (como la altura y el peso), ¿cuál de los siguientes gráficos es el más apropiado?', 
    options: [
        'a) Gráfico de Barras', 
        'b) Histograma', 
        'c) Gráfico de Sectores (Pastel)', 
        'd) Diagrama de Dispersión (Nube de puntos)'
    ], 
    answer: 'd' 
},

{ 
    id: 71, 
    block: 'ESTADÍSTICA', 
    text: 'En un centro de salud se clasificó a 50 pacientes según su edad:<br><br><table border="1" cellpadding="5" style="border-collapse: collapse; text-align: center; font-family: Arial, sans-serif;"><tr><th>Grupo de edad</th><th>Frecuencia</th></tr><tr><td>0-9 años</td><td>8</td></tr><tr><td>10-19 años</td><td>12</td></tr><tr><td>20-29 años</td><td>15</td></tr><tr><td>30-39 años</td><td>10</td></tr><tr><td>40-49 años</td><td>5</td></tr></table><br>¿Cuál es la frecuencia acumulada hasta el grupo de 20-29 años?', 
    options: [
        'a) 15', 
        'b) 20', 
        'c) 35', 
        'd) 50'
    ], 
    answer: 'c' 
},
{ 
    id: 72, 
    block: 'ESTADÍSTICA', 
    text: 'Si en una distribución de frecuencias se observa una asimetría positiva (o sesgo a la derecha, con una "cola" larga hacia los valores altos), ¿cuál es la relación más probable entre sus medidas de tendencia central?', 
    options: [
        'a) Media < Mediana < Moda', 
        'b) Media = Mediana = Moda', 
        'c) Media > Mediana > Moda', 
        'd) La Moda es siempre mayor que la Media y la Mediana.'
    ], 
    answer: 'c' 
},
{ 
    id: 73, 
    block: 'ESTADÍSTICA', 
    text: 'En una evaluación nutricional, el peso de un niño se ubica en el percentil 75 para su edad. ¿Qué significa esta ubicación?', 
    options: [
        'a) El niño pesa igual o más que aproximadamente el 75 % de los niños de referencia.', 
        'b) El niño pesa menos que el 75 % de los niños de su edad.', 
        'c) El niño tiene exactamente 75 kg de peso corporal.', 
        'd) El niño pertenece al 25 % con menor peso corporal.'
    ], 
    answer: 'a' 
},
{ 
    id: 74, 
    block: 'ESTADÍSTICA', 
    text: 'Dos grupos de pacientes tienen el mismo promedio de glucosa en sangre: 100 mg/dL. Sin embargo, el grupo A tiene una desviación estándar de 5 mg/dL y el grupo B una desviación estándar de 25 mg/dL.<br><br>¿Qué interpretación es correcta?', 
    options: [
        'a) El grupo B presenta mayor variabilidad en los valores de glucosa.', 
        'b) El grupo A presenta mayor variabilidad en los valores de glucosa.', 
        'c) Ambos grupos tienen exactamente los mismos valores de glucosa.', 
        'd) La desviación estándar no permite comparar la dispersión de los datos.'
    ], 
    answer: 'a' 
},
{ 
    id: 75, 
    block: 'ESTADÍSTICA', 
    text: 'Un investigador desea representar la distribución de las edades de 200 pacientes adultos atendidos en consulta externa. Las edades son datos cuantitativos continuos agrupados en intervalos.<br><br>¿Qué gráfico es el más adecuado?', 
    options: [
        'a) Gráfico de sectores', 
        'b) Histograma', 
        'c) Diagrama de dispersión', 
        'd) Pictograma'
    ], 
    answer: 'b' 
},

    // --- LENGUAJE Y COMUNICACIÓN ---
    { id: 76, block: 'LENGUAJE Y COMUNICACIÓN', text: 'En el siguiente listado, marque la palabra grave que lleva tilde:', options: ['a) Champú', 'b) Transición', 'c) Revólver', 'd) Vívido'], answer: 'c' },
  { id: 77, block: 'LENGUAJE Y COMUNICACIÓN', text: '¿A qué modalidad de lectura pertenecen textos como la noticia, el tratado científico y los datos estadísticos?', options: ['a) Interpretativa', 'b) Informativa', 'c) Denotativa', 'd) Crítica'], answer: 'b' },
  { id: 78, block: 'LENGUAJE Y COMUNICACIÓN', text: 'En el siguiente ejercicio, seleccione la alternativa que establezca la misma relación que hay entre las dos primeras palabras escritas con mayúsculas. ABUCHEO es a MURMURACIÓN como:', options: ['a) Aclamación es a aplauso', 'b) Silbatina es a odio', 'c) Vocerío es a griterío', 'd) Ensalzamiento es a alabanza'], answer: 'a' },
  { id: 79, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Considere el siguiente texto: "Disculpen esta impericia, esta torpeza al escribir. Me atropello, nada va en orden. No soy escritor..." Según el texto, ¿cuál palabra es equivalente a "impericia"?', options: ['a) Desorden', 'b) Accidente', 'c) Negligencia', 'd) Incompetencia'], answer: 'd' },
  { id: 80, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Lea el siguiente enunciado: "¡Acuda al centro de salud más cercano si presenta fiebre persistente o dificultad para respirar!" ¿Qué función del lenguaje predomina?', options: ['a) Referencial', 'b) Apelativa', 'c) Poética', 'd) Metalingüística'], answer: 'b' },
{ id: 81, block: 'LENGUAJE Y COMUNICACIÓN', text: 'En el siguiente ítem escoja la opción cuyo significado sea ajeno (diferente) al campo de significación común a las demás palabras y a la escrita en letras mayúsculas (que no comparta relación semántica). ALZAR', options: ['a) Levantar', 'b) Crecer', 'c) Elevar', 'd) Ascender'], answer: 'b' },
  { id: 82, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Seleccione la opción que contenga el par de palabras que den sentido a la oración. __________ la tormenta, no podíamos salir de nuestras casas hasta que _________ .', options: ['a) Inundaba – acabara', 'b) Destruía – mitigara', 'c) Arreciaba – amainara', 'd) Apercibía – finalizara'], answer: 'c' },
  { id: 83, block: 'LENGUAJE Y COMUNICACIÓN', text: '¿Cuál es el propósito principal de un texto argumentativo?', options: ['a) Narrar hechos reales o imaginarios en una secuencia temporal.', 'b) Describir las características físicas de una persona, lugar u objeto.', 'c) Defender una postura mediante razones, evidencias o ejemplos.', 'd) Dar instrucciones ordenadas para realizar un procedimiento.'], answer: 'c' },
  { id: 84, block: 'LENGUAJE Y COMUNICACIÓN', text: 'En el siguiente ítem, usted deberá elegir la palabra de significado más opuesto a la escrita con letras mayúsculas. REMEMBRANZA', options: ['a) Recuerdo', 'b) Olvido', 'c) Añoranza', 'd) Evocación'], answer: 'b' },
  { id: 85, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Considere el siguiente texto:<br><br>"Los programas \'divertidos\' tienen mucho rating –y el rating es lo supremo–, no importa a costa de qué valor, ni quien lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad".<br><br>Considere las siguientes afirmaciones:<br>A. Los programas culturales tienen poca popularidad.<br>B. Las personas seleccionan el programa según el nivel de audiencia.<br>C. La oferta tiende hacia la superficialidad y el entretenimiento. <br><br>De las anteriores, ¿cuáles se infieren del texto?', options: ['a) Solo A', 'b) Solo C', 'c) A y B', 'd) B y C'], answer: 'b' },
{ id: 86, block: 'LENGUAJE Y COMUNICACIÓN', text: '“Durante la campaña de vacunación, acudieron muchos adultos mayores al centro de salud.” ¿Cuál es el sujeto de la oración?', options: ['a) Durante la campaña de vacunación', 'b) Acudieron', 'c) Muchos adultos mayores', 'd) Al centro de salud'], answer: 'c' },
  { id: 87, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Considere el siguiente texto:<br><br>"El chiste es un dicho breve, agudo y gracioso que surge espontáneamente del pueblo; algunos investigadores y autores los recopilan para su publicación."<br><br>Según el texto, ¿cuál palabra sintetiza los términos subrayados?', options: ['a) Sagaz', 'b) Burlesco', 'c) Ingenioso', 'd) Perspicaz'], answer: 'c' },
  { id: 88, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Los ejercicios 88 y 89 se basan en el siguiente fragmento:<br><br>Este fragmento trata sobre la doctrina científica de los pitagóricos. "El pensamiento de Pitágoras se inscribe en la corriente dualista. En su reflexión, o en la de su escuela, se afianza la división entre dos mundos; por una parte, el de lo celeste, cuyo movimiento es armónico, eterno e incorruptible, y por otra, el orden de lo terreno, la región de lo corruptible. Pero también hay otro estadio en el que se ve con igual fuerza este dualismo, y es en las derivaciones tomadas del estudio de los números. De este modo, en la tabla de las diez oposiciones fundamentales, las tres primeras son: limitado-ilimitado, impar-par, uno-muchos. Esta tabla pasó de ser una de las partes del estudio de los números, a utilizarse como decálogo de la moral. Esta ciencia pitagórica de los números es indudablemente el legado más valioso que se deriva del pensamiento de Pitágoras"<br><br>. 88. En el fragmento anterior, la palabra "estadio" (línea 4) se refiere a:', options: ['a) lugar de estudio.', 'b) línea de pensamiento.', 'c) deseo de conocimiento.', 'd) estado de la inteligencia.'], answer: 'b' },
  { id: 89, block: 'LENGUAJE Y COMUNICACIÓN', text: 'De acuerdo con el fragmento anterior, podemos afirmar que el pensamiento pitagórico es esencialmente:', options: ['a) moral.', 'b) espiritual.', 'c) numérico.', 'd) dual.'], answer: 'd' },
{ id: 90, block: 'LENGUAJE Y COMUNICACIÓN', text: 'Lea la siguiente oración: "El médico fue una luz para la familia durante el tratamiento del paciente."<br><br>En la oración anterior, la palabra "luz" se usa en sentido:', options: ['a) Denotativo, porque se refiere a una fuente de iluminación.', 'b) Connotativo, porque expresa orientación, esperanza o ayuda.', 'c) Literal, porque indica la presencia de energía eléctrica.', 'd) Técnico, porque pertenece al vocabulario médico.'], answer: 'b' }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 110 * 60; // 24 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload(); 
      return;
    }

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    // Limpiamos los contenedores nuevos
    document.getElementById('biologia-nav-buttons').innerHTML = '';
    document.getElementById('anatomia-nav-buttons').innerHTML = '';
    document.getElementById('quimica-nav-buttons').innerHTML = '';
    document.getElementById('estadistica-nav-buttons').innerHTML = '';
    document.getElementById('lenguaje-nav-buttons').innerHTML = '';

    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        
        // Asignamos el botón al contenedor correcto según el bloque
        let blockContainerId = '';
        if (q.block === 'BIOLOGÍA') blockContainerId = 'biologia-nav-buttons';
        else if (q.block === 'ANATOMÍA') blockContainerId = 'anatomia-nav-buttons';
        else if (q.block === 'QUÍMICA') blockContainerId = 'quimica-nav-buttons';
        else if (q.block === 'ESTADÍSTICA') blockContainerId = 'estadistica-nav-buttons';
        else if (q.block === 'LENGUAJE Y COMUNICACIÓN') blockContainerId = 'lenguaje-nav-buttons';

        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        
        if (blockContainerId) {
            document.getElementById(blockContainerId).appendChild(button);
        }
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';
    
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text.replace(/\n/g, '<br>')}</p>`;
    
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }
    
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
    }

    html += '<div class="options">';
    if (q.optionImages) {
        const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    
    sendResultsToEmail(finalScore, results);

    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text.replace(/\n/g, '<br>')}</p>`;
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
        }

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});

async function sendResultsToEmail(finalScore, results) {
    const userEmail = window.currentUser ? window.currentUser.email : "Usuario Desconocido";

    let messageBody = `¡Se ha completado un nuevo intento en el simulador!\n\n`;
    messageBody += `Usuario: ${userEmail}\n`;
    messageBody += `Puntuación Final: ${finalScore} / 1000\n`;
    messageBody += `Aciertos: ${results.correctAnswers} / ${results.totalQuestions}\n\n`;
    messageBody += `--- DETALLE DE RESPUESTAS ---\n\n`;

    questions.forEach(q => {
        const userAnswer = userAnswers[q.id] || "No respondida";
        const correctAnswer = q.answer;
        const isCorrect = userAnswer === correctAnswer;
        
        messageBody += `Pregunta ${q.id} (${q.block}):\n`;
        messageBody += `Opción marcada: ${userAnswer.toUpperCase()}\n`;
        messageBody += `Opción correcta: ${correctAnswer.toUpperCase()}\n`;
        messageBody += `Estado: ${isCorrect ? '✅ Correcto' : '❌ Incorrecto'}\n\n`;
    });

    try {
        const response = await fetch("https://formsubmit.co/ajax/sebastianneto84@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `Resultados Simulador U - ${userEmail} (${finalScore} pts)`,
                usuario: userEmail,
                puntaje: finalScore,
                detalle_completo: messageBody,
                _template: "box", 
                _captcha: "false" 
            })
        });

        if (response.ok) {
            console.log("Resultados enviados exitosamente a sebastianneto84@gmail.com");
        } else {
            console.error("Error al enviar los resultados con FormSubmit.");
        }
    } catch (error) {
        console.error("Error de red al intentar enviar el correo:", error);
    }
}
