export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string; // HTML string
  date: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'fotovoltaika-pro-ohrev-vody',
    title: 'Fotovoltaika pro ohřev vody: Jak funguje a proč se vyplatí?',
    description: 'Snižte své náklady na ohřev teplé užitkové vody až o 70 %. Fotovoltaický ohřev vody je nejjednodušší cesta k energetické soběstačnosti.',
    date: '10. Května 2026',
    readTime: '4 min čtení',
    image: '/images/fve_water_heating.png',
    content: `
      <h2>Proč uvažovat o fotovoltaice pro ohřev vody?</h2>
      <p>Ohřev teplé užitkové vody (TUV) patří v rodinných domech k největším žroutům energie. Zatímco klasická fotovoltaická elektrárna s bateriovým úložištěm představuje větší investici, <strong>fotovoltaický ohřev vody je cenově dostupný, extrémně spolehlivý a má bezkonkurenční návratnost.</strong></p>
      
      <p>Využitím sluneční energie můžete pokrýt <strong>60 až 70 % celoroční potřeby teplé vody</strong>. V letních měsících se systém postará o ohřev vody prakticky na 100 %, což znamená, že můžete svůj stávající plynový nebo elektrický kotel úplně vypnout.</p>

      <h2>Jak to funguje?</h2>
      <p>Princip je velmi přímočarý a elegantní. Solární panely umístěné na střeše vašeho domu generují stejnosměrný proud. Ten putuje přímo do speciálního MPPT měniče (např. námi využívaný prémiový GETI 02), který je přímo napojen na topnou spirálu vašeho stávajícího bojleru.</p>
      
      <ul>
        <li><strong>Žádné drahé baterie:</strong> Vaší "baterií" je samotný bojler. Energie se ukládá ve formě tepla.</li>
        <li><strong>Vysoká účinnost:</strong> Díky technologii MPPT (Maximum Power Point Tracking) střídač z panelů vyždímá maximum energie i při zatažené obloze.</li>
        <li><strong>Bezpečný provoz:</strong> Systém funguje autonomně a v případě nedostatku slunce plynule přepne na dohřev ze sítě.</li>
      </ul>

      <h2>Návratnost, která dává smysl</h2>
      <p>Zatímco u velkých FVE s bateriemi se návratnost počítá často na 7 a více let, u fotovoltaiky pro ohřev vody je situace diametrálně odlišná. Díky nízké pořizovací ceně a absenci složitých akumulátorů se <strong>návratnost investice pohybuje kolem 2–3 let</strong>. Při započtení neustále rostoucích cen energií to z tohoto řešení dělá jednu z nejlepších investic na trhu.</p>

      <h2>Závěrem</h2>
      <p>Pokud hledáte způsob, jak se bránit rostoucím cenám elektřiny, ale nechcete investovat stovky tisíc do komplexní elektrárny, je fotovoltaický ohřev vody tou správnou volbou. S naším balíčkem získáte špičkové komponenty, profi montáž a navíc u nás platíte až po instalaci.</p>
    `
  },
  {
    id: '2',
    slug: 'kompletni-pruvodce-fotovoltaikou',
    title: 'Kompletní průvodce fotovoltaikou: Jak funguje FVE?',
    description: 'Zjistěte, jak funguje solární elektrárna, z jakých komponent se skládá a na co si dát pozor při výběru dodavatele pro váš dům.',
    date: '5. Května 2026',
    readTime: '6 min čtení',
    image: '/images/fve_water_heating_scheme.jpg',
    content: `
      <h2>Co je to fotovoltaická elektrárna (FVE)?</h2>
      <p>Fotovoltaická elektrárna je sofistikovaný systém, který dokáže přeměnit sluneční záření přímo na elektrickou energii, kterou můžete využít pro chod vaší domácnosti. Od rozsvícení žárovky až po nabití elektromobilu nebo ohřev vody v bojleru.</p>
      
      <h2>Základní komponenty prémiového systému</h2>
      <p>Moderní FVE není jen hromada panelů na střeše. Jde o pečlivě sladěný ekosystém, kde každá část hraje kritickou roli.</p>

      <h3>1. Fotovoltaické panely</h3>
      <p>Srdce celého systému. Zajímat by vás měl především výkon, účinnost a technologie. V našich realizacích používáme výhradně panely <strong>Trina Vertex S+ (Black Frame)</strong>. Jde o špičku na trhu, která díky N-type i-TOPCon technologii a Dual-glass provedení nabízí účinnost až 22,8 % a extrémní odolnost vůči degradaci. To znamená maximální zisk energie i po 25 letech.</p>

      <h3>2. Střídač (Invertor)</h3>
      <p>Panely vyrábějí stejnosměrný proud (DC), ale vaše domácí spotřebiče využívají střídavý (AC). O tuto přeměnu se stará střídač. Pro systémy na ohřev vody využíváme vysoce spolehlivý MPPT měnič <strong>GETI 02</strong> s účinností přes 99 %. Tento chytrý "mozek" zajišťuje, aby panely běžely vždy v optimálním bodě výkonu.</p>

      <h3>3. Topná spirála / Bojler</h3>
      <p>V případě systémů pro ohřev vody tvoří zásobník vaši tepelnou baterii. Sluneční energie přes střídač napájí topnou spirálu a ohřívá vodu, která následně udržuje teplotu pro vaše večerní sprchování.</p>

      <h2>Proč zvolit instalaci na klíč?</h2>
      <p>Instalace FVE vyžaduje precizní znalosti nejen v oblasti střešních prací, ale i v silnoproudé elektrotechnice. Profesionální instalace na klíč znamená, že vyřešíme statiku střechy, bezpečné uchycení, bezchybné protažení kabeláže, zapojení do rozvaděče a následnou elektro revizi a certifikaci. Vy pouze začnete odebírat zelenou energii.</p>
      
      <p>Vybírejte dodavatele s historií a nenechte se zlákat nesmyslně nízkými nabídkami, které často končí u nekvalitních komponent nebo špatně provedené elektroinstalace. U nás navíc <strong>neplatíte žádné zálohy předem</strong> – celou částku uhradíte až po úspěšném předání díla.</p>
    `
  }
];
