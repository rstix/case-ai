const data = [
  {
    title: 'Fikri',
    prompt:
      'Fikri mülkiyet hakları ihlali davalarında tazminat miktarının belirlenmesine yönelik Yargıtay kararlarını arıyorum, özellikle patent ihlalleri ile ilgili kararlar.',
    results: [
      {
        file: 'examples/prompt_3/11._Hukuk_Dairesi_2017-1656.html',
        summary:
          'Yargıtay, bir teknik buluşun izinsiz kullanımı nedeniyle tazminat talebiyle açılan patent ihlali davasında yeniden yargılama talebini reddeden Bölge Adliye Mahkemesi kararını onadı. Talep, orijinal dava sırasında bilinen patentle ilgili olduğu ve yeni delil için sıkı kriterleri karşılamadığı gerekçesiyle reddedildi.',
        title:
          'Yargıtay, Patent İhlali Davasında Yeniden Yargılama Talebini Reddetti.',
      },
      {
        file: 'examples/prompt_3/11._Hukuk_Dairesi_2017-2777.html',
        summary:
          'Yargıtay, bir su temin projesine katkıda bulunulan konsorsiyum sözleşmesi anlaşmazlığına ilişkin davada alt mahkemenin kararını bozdu. Davanın Fikri ve Sınai Haklar Hukuk Mahkemesi yerine Ticaret Mahkemesi tarafından değerlendirilmesi gerektiğine karar vererek, uyuşmazlığın doğası göz önünde bulundurularak yetkinin doğru belirlenmesinin önemini vurguladı.',
        title:
          'Yargıtay, Konsorsiyum Sözleşmesi Anlaşmazlığında Yanlış Yetki Nedeniyle Yeniden Yargılama Emri Verdi.',
      },
      {
        file: 'examples/prompt_3/11._Hukuk_Dairesi_2017-720.html',
        summary:
          'Yargıtay, şirket kuruluşundan önce yapılan anlaşmaya dayanarak patent ve yazılım lisanslarının devri için açılan ve reddedilen davada, kararın onanmasına yönelik düzeltme talebini, uygulanabilir yasa kapsamında bir düzeltme gerekçesi bulunmadığı için reddetti.',
        title:
          'Yargıtay, Fikri Mülkiyet Davasında Karar Düzeltme Talebini Reddetti.',
      },
      ,
    ],
  },
  {
    title: 'Geçen',
    prompt:
      "Geçen yıl içinde Yargıtay'ın verdiği, işverenin işçiyi haksız yere işten çıkardığı durumları içeren emsal kararları görmek istiyorum. Özellikle, işverenin yetersiz performans gerekçesiyle işten çıkarma kararlarının ne kadarının haksız bulunduğunu anlamaya çalışıyorum. Bu konuda Yargıtay'ın yaklaşımını ve karar gerekçelerini incelemek istiyorum.",
    results: [
      {
        file: 'examples/prompt_6/9._Hukuk_Dairesi_2018-5627.html',
        summary:
          "The court ruled in favor of the plaintiff, who was unjustly dismissed and subjected to a fraudulent debt claim through a blank cheque he was forced to sign at employment onset. The appellate court confirmed the absence of debt and ordered the return of the cheque, highlighting discrepancies in the defendant's claims and lack of evidence for the alleged debt's legitimacy.",
        title:
          'Judicial Decision on Unjust Dismissal and Fraudulent Debt Claim via Blank Cheque',
      },
      {
        file: 'examples/prompt_6/17._Hukuk_Dairesi_2015-18114.html',
        summary:
          'Trafik kazası nedeniyle maddi ve manevi zararlar için açılan dava kısmen kabul edilerek, davalı sigorta şirketinin poliçe limitleri dahilinde zararı ödemesine karar verildi. Yapılan temyiz sonucu hatır indirimi ve müterafik kusur oranı hesaplamalarındaki hatalar nedeniyle ilk hüküm bozuldu.',
        title: 'Trafik Kazası Sonucu Yaralanma Tazminatı Kararı',
      },
      {
        file: 'examples/prompt_6/17._Hukuk_Dairesi_2016-13899.html',
        summary:
          'Temyiz mahkemesi, bir davalıya karşı iddianın reddedilmesi ve diğer davalılar aleyhine kabul edilmesine dair trafik kazası tazminat davasındaki kararı bozdu. Mahkeme, zarar ve araç değer kaybının yeterli değerlendirilmediğini belirterek, araç onarım maliyetleri ve değer kaybı hesaplaması konusunda detaylı uzman analizi yapılmasının ardından nihai karara varılması gerektiğini vurguladı.',
        title:
          "Ticaret Mahkemesi'nin Trafik Kazası Tazminat Kararının Bozulması",
      },
    ],
  },
  {
    title: 'Son',
    prompt:
      'Son beş yıl içerisinde Anayasa Mahkemesi tarafından alınmış, bireysel başvuru yoluyla insan hakları ihlalleri konusunda verilmiş emsal kararları incelemek istiyorum. Özellikle, ifade özgürlüğü ihlallerine yönelik kararların detaylarına ve mahkemenin bu konudaki tutumuna bakmak istiyorum.',
    results: [
      {
        file: 'examples/prompt_7/Hukuk_Genel_Kurulu_2017-1459.html',
        summary:
          'Bir öğretmenin, sendikanın web sitesinde başörtüsüyle ilgili yanlış davranış iddiaları üzerine açtığı manevi tazminat davası kısmen kabul edildi. Yargıtay, eleştirileri ifade özgürlüğü içinde ve kişisel saldırı niteliğinde olmadığı gerekçesiyle kararı bozdu.',
        title:
          'Öğretmen ve Başörtüsü Olayı İftirasına Dair Karar Yargıtayca Bozuldu',
      },
      {
        file: 'examples/prompt_7/4._Hukuk_Dairesi_2021-738.html',
        summary:
          'Bir siyasi figür, meclis grup toplantısında yapılan hakaret içerikli açıklamalar nedeniyle manevi tazminat davası açtı. Mahkeme, ifade özgürlüğü ile kişisel haklar arasında denge kurarak azaltılmış tazminata hükmetti.',
        title: 'Basın Yoluyla Karalama Sonucu Kısmi Manevi Tazminat',
      },
      {
        file: 'examples/prompt_7/4._Hukuk_Dairesi_2016-13484.html',
        summary:
          'Davacının özel hayatının ihlal edildiği ve haksız şikayet sebebiyle açtığı manevi tazminat davası kısmen kabul edildi. Yüksek mahkeme, manevi tazminat miktarını fazla bularak azaltılmasına karar verdi.',
        title: 'Gizlilik İhlali ve Haksız Şikayet Davasında Kısmi Kabul',
      },
    ],
  },
];

export default data;
