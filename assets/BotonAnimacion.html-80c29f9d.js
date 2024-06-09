import{_ as e}from"./banner-85030e21.js";import{_ as c,r as l,o as i,c as u,a as n,d as a,w as t,b as o,e as p}from"./app-7e379709.js";const r="/api-personalizada-wiki-vuepress/gifs/boton-animacion.gif",k={},d=p('<p><img src="'+e+'" alt="a"></p><h1 id="botonanimacion" tabindex="-1"><a class="header-anchor" href="#botonanimacion" aria-hidden="true">#</a> BotonAnimacion</h1><p>Clase visual que permite el modelado de un botón con animación al ser presionado.</p><p>Esta clase hereda de <code>JButton</code>.</p><p>Este componente se visualiza mejor con los lafs de FlatLaf.</p><p><strong>Preview de Componente en la Prueba Visual:</strong><img src="'+r+'" alt="a"></p><h2 id="indice-de-contenido" tabindex="-1"><a class="header-anchor" href="#indice-de-contenido" aria-hidden="true">#</a> Índice de Contenido</h2>',7),m={class:"table-of-contents"},v=p(`<h2 id="constructores" tabindex="-1"><a class="header-anchor" href="#constructores" aria-hidden="true">#</a> Constructores</h2><ul><li><a href="#constructor-vac%C3%ADo">Constructor vacío</a></li></ul><h3 id="constructor-vacio" tabindex="-1"><a class="header-anchor" href="#constructor-vacio" aria-hidden="true">#</a> Constructor vacío</h3><ul><li><strong>Arquetipo:</strong> <code>BotonAnimacion()</code></li><li><strong>Descripción:</strong> Permite construir el componente visual <code>BotonAnimacion</code>.</li><li><strong>Particularidades:</strong> El componente es creado con <code>background</code> de color blanco, y con un <a href="#color-de-efecto">color de efecto</a> con <code>rgb(173,173,173)</code></li><li><blockquote><p><strong>Ejemplo de uso:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BotonAnimacion</span> btn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BotonAnimacion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></li></ul><h2 id="atributos-de-interes" tabindex="-1"><a class="header-anchor" href="#atributos-de-interes" aria-hidden="true">#</a> Atributos de interés</h2><ul><li><a href="#color-de-efecto">Color de efecto</a></li></ul><h3 id="color-de-efecto" tabindex="-1"><a class="header-anchor" href="#color-de-efecto" aria-hidden="true">#</a> Color de Efecto</h3><ul><li><strong>Arquetipo:</strong> <code>Color colorEfecto</code></li><li><strong>Descripción:</strong> <code>Color</code> que determina el color de la animación.</li><li><strong>Métodos Relacionados:</strong> <a href="#getter-de-color-de-efecto">Getter de Color de Efecto</a> y <a href="#setter-de-color-de-efecto">Setter de Color de Efecto</a></li></ul><h2 id="metodos-de-interes" tabindex="-1"><a class="header-anchor" href="#metodos-de-interes" aria-hidden="true">#</a> Métodos de interés</h2><ul><li><a href="#getter-de-color-de-efecto">Getter de Color de Efecto</a></li><li><a href="#setter-de-color-de-efecto">Setter de Color de Efecto</a></li></ul><h3 id="getter-de-color-de-efecto" tabindex="-1"><a class="header-anchor" href="#getter-de-color-de-efecto" aria-hidden="true">#</a> Getter de Color de Efecto</h3><ul><li><strong>Arquetipo:</strong> <code>getColorEfecto()</code></li><li><strong>Descripción:</strong> Permite obtener el <code>Color</code> de la animación.</li><li><strong>Atributos Relacionados:</strong> <a href="#color-de-efecto">Color de Efecto</a></li><li><blockquote><p><strong>Ejemplo de uso:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Color</span> colorEfecto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BotonAnimacion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getColorEfecto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></li></ul><h3 id="setter-de-color-de-efecto" tabindex="-1"><a class="header-anchor" href="#setter-de-color-de-efecto" aria-hidden="true">#</a> Setter de Color de Efecto</h3><ul><li><strong>Arquetipo:</strong> <code>setColorEfecto(Color)</code></li><li><strong>Parámetros:</strong> <code>Color</code> de la animación.</li><li><strong>Descripción:</strong> Permite cambiar el <code>Color</code> de la animación.</li><li><strong>Particularidades:</strong> <strong>No</strong> se guardan los colores que sean <code>null</code>, sino que se mantiene el valor anteriormente guardado.</li><li><strong>Atributos Relacionados:</strong> <a href="#color-de-efecto">Color de Efecto</a></li><li><blockquote><p><strong>Ejemplo de uso:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BotonAnimacion</span> btn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BotonAnimacion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">setColorEfecto</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ul><h2 id="ejemplo-de-uso" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso" aria-hidden="true">#</a> Ejemplo de Uso</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Prueba</span> <span class="token keyword">extends</span> <span class="token class-name">JFrame</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">JPanel</span> contentPane<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">BotonAnimacion</span> btn<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Prueba</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">setDefaultCloseOperation</span><span class="token punctuation">(</span><span class="token class-name">JFrame</span><span class="token punctuation">.</span><span class="token constant">EXIT_ON_CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">setBounds</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">450</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		contentPane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		contentPane<span class="token punctuation">.</span><span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EmptyBorder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">setContentPane</span><span class="token punctuation">(</span>contentPane<span class="token punctuation">)</span><span class="token punctuation">;</span>
		contentPane<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		btn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BotonAnimacion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setForeground</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">CYAN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span><span class="token string">&quot;Tahoma&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Font</span><span class="token punctuation">.</span><span class="token constant">PLAIN</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;Hola&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setColorEfecto</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		btn<span class="token punctuation">.</span><span class="token function">setBounds</span><span class="token punctuation">(</span><span class="token number">113</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		contentPane<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="codigo-fuente" tabindex="-1"><a class="header-anchor" href="#codigo-fuente" aria-hidden="true">#</a> Código Fuente</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BotonAnimacion</span> <span class="token keyword">extends</span> <span class="token class-name">JButton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Color</span> <span class="token function">getColorEfecto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> colorEfecto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColorEfecto</span><span class="token punctuation">(</span><span class="token class-name">Color</span> colorEfecto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>colorEfecto<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    		<span class="token keyword">this</span><span class="token punctuation">.</span>colorEfecto <span class="token operator">=</span> colorEfecto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Animator</span> animator<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> tamMaxBtn<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> tamAnim<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Point</span> puntoPresionado<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> alpha<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Color</span> colorEfecto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">173</span><span class="token punctuation">,</span> <span class="token number">173</span><span class="token punctuation">,</span> <span class="token number">173</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BotonAnimacion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setContentAreaFilled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EmptyBorder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setCursor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cursor</span><span class="token punctuation">(</span><span class="token class-name">Cursor</span><span class="token punctuation">.</span><span class="token constant">HAND_CURSOR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addMouseListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MouseAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mousePressed</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tamMaxBtn <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
                tamAnim <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                puntoPresionado <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                alpha <span class="token operator">=</span> <span class="token number">0.5f</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>animator<span class="token punctuation">.</span><span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    animator<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                animator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TimingTarget</span> tiempoPreferido <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimingTargetAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">timingEvent</span><span class="token punctuation">(</span><span class="token keyword">float</span> fraccion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>fraccion <span class="token operator">&gt;</span> <span class="token number">0.5f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    alpha <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">-</span> fraccion<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                tamAnim <span class="token operator">=</span> fraccion <span class="token operator">*</span> tamMaxBtn<span class="token punctuation">;</span>
                <span class="token function">repaint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        animator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animator</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> tiempoPreferido<span class="token punctuation">)</span><span class="token punctuation">;</span>
        animator<span class="token punctuation">.</span><span class="token function">setResolution</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">paintComponent</span><span class="token punctuation">(</span><span class="token class-name">Graphics</span> grphcs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ancho <span class="token operator">=</span> <span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> alto <span class="token operator">=</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedImage</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedImage</span><span class="token punctuation">(</span>ancho<span class="token punctuation">,</span> alto<span class="token punctuation">,</span> <span class="token class-name">BufferedImage</span><span class="token punctuation">.</span><span class="token constant">TYPE_INT_ARGB</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Graphics2D</span> g2 <span class="token operator">=</span> img<span class="token punctuation">.</span><span class="token function">createGraphics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g2<span class="token punctuation">.</span><span class="token function">setRenderingHint</span><span class="token punctuation">(</span><span class="token class-name">RenderingHints</span><span class="token punctuation">.</span><span class="token constant">KEY_ANTIALIASING</span><span class="token punctuation">,</span> <span class="token class-name">RenderingHints</span><span class="token punctuation">.</span><span class="token constant">VALUE_ANTIALIAS_ON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g2<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token function">getBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g2<span class="token punctuation">.</span><span class="token function">fillRoundRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> ancho<span class="token punctuation">,</span> alto<span class="token punctuation">,</span> alto<span class="token punctuation">,</span> alto<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>puntoPresionado <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            g2<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span>colorEfecto<span class="token punctuation">)</span><span class="token punctuation">;</span>
            g2<span class="token punctuation">.</span><span class="token function">setComposite</span><span class="token punctuation">(</span><span class="token class-name">AlphaComposite</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">AlphaComposite</span><span class="token punctuation">.</span><span class="token constant">SRC_ATOP</span><span class="token punctuation">,</span> alpha<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            g2<span class="token punctuation">.</span><span class="token function">fillOval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>puntoPresionado<span class="token punctuation">.</span>x <span class="token operator">-</span> tamAnim <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>puntoPresionado<span class="token punctuation">.</span>y <span class="token operator">-</span> tamAnim <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> tamAnim<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> tamAnim<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        g2<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        grphcs<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">paintComponent</span><span class="token punctuation">(</span>grphcs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clases-utilizadas-importaciones" tabindex="-1"><a class="header-anchor" href="#clases-utilizadas-importaciones" aria-hidden="true">#</a> Clases utilizadas (Importaciones)</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">AlphaComposite</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Color</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Cursor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Graphics</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Graphics2D</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Point</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">RenderingHints</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token class-name">MouseAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token class-name">MouseEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>image<span class="token punctuation">.</span></span><span class="token class-name">BufferedImage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span></span><span class="token class-name">JButton</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span>border<span class="token punctuation">.</span></span><span class="token class-name">EmptyBorder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>jdesktop<span class="token punctuation">.</span>animation<span class="token punctuation">.</span>timing<span class="token punctuation">.</span></span><span class="token class-name">Animator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>jdesktop<span class="token punctuation">.</span>animation<span class="token punctuation">.</span>timing<span class="token punctuation">.</span></span><span class="token class-name">TimingTarget</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>jdesktop<span class="token punctuation">.</span>animation<span class="token punctuation">.</span>timing<span class="token punctuation">.</span></span><span class="token class-name">TimingTargetAdapter</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function b(f,g){const s=l("router-link");return i(),u("div",null,[d,n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#indice-de-contenido"},{default:t(()=>[o("Índice de Contenido")]),_:1})]),n("li",null,[a(s,{to:"#constructores"},{default:t(()=>[o("Constructores")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#constructor-vacio"},{default:t(()=>[o("Constructor vacío")]),_:1})])])]),n("li",null,[a(s,{to:"#atributos-de-interes"},{default:t(()=>[o("Atributos de interés")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#color-de-efecto"},{default:t(()=>[o("Color de Efecto")]),_:1})])])]),n("li",null,[a(s,{to:"#metodos-de-interes"},{default:t(()=>[o("Métodos de interés")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#getter-de-color-de-efecto"},{default:t(()=>[o("Getter de Color de Efecto")]),_:1})]),n("li",null,[a(s,{to:"#setter-de-color-de-efecto"},{default:t(()=>[o("Setter de Color de Efecto")]),_:1})])])]),n("li",null,[a(s,{to:"#ejemplo-de-uso"},{default:t(()=>[o("Ejemplo de Uso")]),_:1})]),n("li",null,[a(s,{to:"#codigo-fuente"},{default:t(()=>[o("Código Fuente")]),_:1})]),n("li",null,[a(s,{to:"#clases-utilizadas-importaciones"},{default:t(()=>[o("Clases utilizadas (Importaciones)")]),_:1})])])]),v])}const y=c(k,[["render",b],["__file","BotonAnimacion.html.vue"]]);export{y as default};
