// ===============================================
// FAVERO ADVOCACIA - Internationalization (i18n)
// ===============================================

const dictionaries = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            practiceAreas: 'Áreas de Atuação',
            blog: 'Blog',
            contact: 'Contato',
        },
        hero: {
            title: 'Advocacia com excelência e compromisso',
            subtitle: 'Assessoria jurídica especializada em Direito Civil, Trabalhista, Consumidor e Empresarial, com atendimento presencial e online.',
            cta: 'Agendar Consulta',
            ctaSecondary: 'Conheça o Escritório',
        },
        practiceAreas: {
            title: 'Áreas de Atuação',
            subtitle: 'Atuação especializada em diversas áreas do Direito, sempre com foco na excelência e nos resultados para nossos clientes.',
            civil: {
                title: 'Direito Civil',
                description: 'Contratos, responsabilidade civil, família e sucessões, direitos reais e obrigações.',
            },
            labor: {
                title: 'Direito Trabalhista',
                description: 'Reclamações trabalhistas, acordos, rescisões e demais questões laborais.',
            },
            consumer: {
                title: 'Direito do Consumidor',
                description: 'Defesa dos direitos do consumidor, ações de indenização e revisão contratual.',
            },
            corporate: {
                title: 'Direito Empresarial',
                description: 'Constituição de empresas, contratos comerciais, recuperação judicial e falência.',
            },
            procedure: {
                title: 'Processo Civil',
                description: 'Elaboração de petições, recursos e acompanhamento processual em todas as instâncias.',
            },
        },
        about: {
            title: 'Sobre o Advogado',
            subtitle: 'Conheça a trajetória profissional de Eduardo Rios Favero',
            bio: 'Eduardo Rios Favero é advogado pós-graduado em Direito Civil e Processo Civil, com sólida experiência em registros públicos, análise documental para registros e averbações, incorporações imobiliárias, elaboração de petições jurídicas, contratos e recursos, além de atuação contenciosa e extrajudicial em âmbito estadual e federal.',
            experience: 'Atua em escritório próprio desde 2018 e também exerce a função de Juiz Leigo no Juizado Especial Cível do Fórum do Estreito – Comarca da Capital, conduzindo audiências, elaborando termos, decisões e sentenças sob supervisão judicial.',
            education: 'Formação Acadêmica',
            educationDetails: 'Pós-graduação em Direito Civil e Processo Civil',
            judicial: 'Atuação Judicial',
            judicialDetails: 'Juiz Leigo no Juizado Especial Cível do Fórum do Estreito',
        },
        contact: {
            title: 'Contato',
            subtitle: 'Entre em contato para agendar uma consulta ou esclarecer dúvidas.',
            address: 'Endereço',
            addressValue: 'R. Fúlvio Aducci, 627 - Estreito, Florianópolis - SC, 88075-000',
            services: 'Modalidades de Atendimento',
            inPerson: 'Atendimento Presencial',
            online: 'Atendimento Online',
            phone: 'Telefone',
            hours: 'Horário',
            hoursValue: 'Seg - Sex: 9h às 18h',
            socialMedia: 'Redes Sociais',
            form: {
                name: 'Nome',
                email: 'E-mail',
                phone: 'Telefone',
                subject: 'Assunto',
                message: 'Mensagem',
                consent: 'Autorizo o uso dos meus dados para contato, conforme a LGPD.',
                submit: 'Enviar Mensagem',
            },
            success: 'Mensagem enviada com sucesso!',
            successSubtitle: 'Entraremos em contato em breve.',
        },
        blog: {
            title: 'Blog',
            subtitle: 'Artigos e conteúdos sobre temas jurídicos relevantes.',
            readMore: 'Ler mais',
            categories: 'Categorias',
            allPosts: 'Todos os artigos',
            noPostsFound: 'Nenhum artigo encontrado.',
            all: 'Todos',
            searchPlaceholder: 'Buscar artigos...',
        },
        newsletter: {
            title: 'Newsletter',
            subtitle: 'Receba nossos conteúdos jurídicos diretamente no seu e-mail.',
            placeholder: 'Seu e-mail',
            subscribe: 'Inscrever-se',
            consent: 'Ao se inscrever, você concorda com nossa política de privacidade e com o uso dos seus dados conforme a LGPD.',
            success: 'Inscrição realizada com sucesso!',
        },
        footer: {
            rights: 'Todos os direitos reservados.',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Uso',
        },
        practiceAreasPage: {
            cta: 'Precisa de assessoria jurídica?',
            ctaSubtitle: 'Entre em contato para agendar uma consulta e discutir sua questão jurídica com um advogado especializado.',
        },
        aboutPage: {
            timeline: 'Trajetória',
            oabRegistration: 'Registro OAB',
            firmOpening: 'Abertura do Escritório',
            firmOpeningDesc: 'Início das atividades em escritório próprio em Florianópolis.',
            layJudge: 'Juiz Leigo',
            layJudgeDesc: 'Nomeação como Juiz Leigo no Juizado Especial Cível do Fórum do Estreito.',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            practiceAreas: 'Practice Areas',
            blog: 'Blog',
            contact: 'Contact',
        },
        hero: {
            title: 'Legal excellence with commitment',
            subtitle: 'Specialized legal advice in Civil, Labor, Consumer and Corporate Law, with in-person and online services.',
            cta: 'Schedule a Consultation',
            ctaSecondary: 'About the Firm',
        },
        practiceAreas: {
            title: 'Practice Areas',
            subtitle: 'Specialized practice in various areas of Law, always focused on excellence and results for our clients.',
            civil: {
                title: 'Civil Law',
                description: 'Contracts, civil liability, family and inheritance, property rights and obligations.',
            },
            labor: {
                title: 'Labor Law',
                description: 'Labor claims, agreements, terminations and other labor-related matters.',
            },
            consumer: {
                title: 'Consumer Law',
                description: 'Consumer rights defense, compensation claims and contract review.',
            },
            corporate: {
                title: 'Corporate Law',
                description: 'Company formation, commercial contracts, judicial recovery and bankruptcy.',
            },
            procedure: {
                title: 'Civil Procedure',
                description: 'Drafting of petitions, appeals and case monitoring at all levels.',
            },
        },
        about: {
            title: 'About the Lawyer',
            subtitle: 'Learn about the professional background of Eduardo Rios Favero',
            bio: 'Eduardo Rios Favero is a lawyer with a postgraduate degree in Civil Law and Civil Procedure, with solid experience in public records, document analysis for registrations and annotations, real estate incorporations, drafting legal petitions, contracts, and appeals, as well as litigation and extrajudicial matters in both state and federal courts.',
            experience: 'He has been practicing law in his own firm since 2018 and also acts as a Lay Judge at the Small Claims Civil Court of the Estreito Forum – Capital District, conducting hearings, drafting rulings, decisions, and judgments under judicial supervision.',
            education: 'Academic Background',
            educationDetails: 'Postgraduate degree in Civil Law and Civil Procedure',
            judicial: 'Judicial Activity',
            judicialDetails: 'Lay Judge at the Small Claims Civil Court of the Estreito Forum',
        },
        contact: {
            title: 'Contact',
            subtitle: 'Get in touch to schedule a consultation or ask questions.',
            address: 'Address',
            addressValue: 'R. Fúlvio Aducci, 627 - Estreito, Florianópolis - SC, 88075-000, Brazil',
            services: 'Service Options',
            inPerson: 'In-Person Services',
            online: 'Online Services',
            phone: 'Phone',
            hours: 'Hours',
            hoursValue: 'Mon - Fri: 9am to 6pm',
            socialMedia: 'Social Media',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                subject: 'Subject',
                message: 'Message',
                consent: 'I authorize the use of my data for contact purposes, in accordance with LGPD/GDPR.',
                submit: 'Send Message',
            },
            success: 'Message sent successfully!',
            successSubtitle: 'We will contact you soon.',
        },
        blog: {
            title: 'Blog',
            subtitle: 'Articles and content on relevant legal topics.',
            readMore: 'Read more',
            categories: 'Categories',
            allPosts: 'All articles',
            noPostsFound: 'No articles found.',
            all: 'All',
            searchPlaceholder: 'Search articles...',
        },
        newsletter: {
            title: 'Newsletter',
            subtitle: 'Receive our legal content directly in your inbox.',
            placeholder: 'Your email',
            subscribe: 'Subscribe',
            consent: 'By subscribing, you agree to our privacy policy and the use of your data in accordance with LGPD/GDPR.',
            success: 'Successfully subscribed!',
        },
        footer: {
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
        },
        practiceAreasPage: {
            cta: 'Need legal advice?',
            ctaSubtitle: 'Contact us to schedule a consultation and discuss your legal matter with a specialized lawyer.',
        },
        aboutPage: {
            timeline: 'Timeline',
            oabRegistration: 'OAB Registration',
            firmOpening: 'Firm Opening',
            firmOpeningDesc: 'Started activities in own office in Florianópolis.',
            layJudge: 'Lay Judge',
            layJudgeDesc: 'Appointed as Lay Judge at the Small Claims Civil Court of the Estreito Forum.',
        },
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre',
            practiceAreas: 'Áreas de Práctica',
            blog: 'Blog',
            contact: 'Contacto',
        },
        hero: {
            title: 'Abogacía con excelencia y compromiso',
            subtitle: 'Asesoría jurídica especializada en Derecho Civil, Laboral, del Consumidor y Empresarial, con atención presencial y online.',
            cta: 'Agendar Consulta',
            ctaSecondary: 'Conozca el Despacho',
        },
        practiceAreas: {
            title: 'Áreas de Práctica',
            subtitle: 'Actuación especializada en diversas áreas del Derecho, siempre con enfoque en la excelencia y los resultados para nuestros clientes.',
            civil: {
                title: 'Derecho Civil',
                description: 'Contratos, responsabilidad civil, familia y sucesiones, derechos reales y obligaciones.',
            },
            labor: {
                title: 'Derecho Laboral',
                description: 'Reclamaciones laborales, acuerdos, rescisiones y demás cuestiones laborales.',
            },
            consumer: {
                title: 'Derecho del Consumidor',
                description: 'Defensa de los derechos del consumidor, acciones de indemnización y revisión contractual.',
            },
            corporate: {
                title: 'Derecho Empresarial',
                description: 'Constitución de empresas, contratos comerciales, recuperación judicial y quiebra.',
            },
            procedure: {
                title: 'Proceso Civil',
                description: 'Elaboración de peticiones, recursos y seguimiento procesal en todas las instancias.',
            },
        },
        about: {
            title: 'Sobre el Abogado',
            subtitle: 'Conozca la trayectoria profesional de Eduardo Rios Favero',
            bio: 'Eduardo Rios Favero es abogado con posgrado en Derecho Civil y Proceso Civil, con sólida experiencia en registros públicos, análisis documental para registros y anotaciones, incorporaciones inmobiliarias, elaboración de peticiones jurídicas, contratos y recursos, además de actuación contenciosa y extrajudicial en ámbito estatal y federal.',
            experience: 'Actúa en despacho propio desde 2018 y también ejerce la función de Juez Lego en el Juzgado Especial Civil del Foro de Estreito – Comarca de la Capital, conduciendo audiencias, elaborando términos, decisiones y sentencias bajo supervisión judicial.',
            education: 'Formación Académica',
            educationDetails: 'Posgrado en Derecho Civil y Proceso Civil',
            judicial: 'Actuación Judicial',
            judicialDetails: 'Juez Lego en el Juzgado Especial Civil del Foro de Estreito',
        },
        contact: {
            title: 'Contacto',
            subtitle: 'Póngase en contacto para agendar una consulta o aclarar dudas.',
            address: 'Dirección',
            addressValue: 'R. Fúlvio Aducci, 627 - Estreito, Florianópolis - SC, 88075-000, Brasil',
            services: 'Modalidades de Atención',
            inPerson: 'Atención Presencial',
            online: 'Atención Online',
            phone: 'Teléfono',
            hours: 'Horario',
            hoursValue: 'Lun - Vie: 9h a 18h',
            socialMedia: 'Redes Sociales',
            form: {
                name: 'Nombre',
                email: 'Correo electrónico',
                phone: 'Teléfono',
                subject: 'Asunto',
                message: 'Mensaje',
                consent: 'Autorizo el uso de mis datos para contacto, conforme a la LGPD/GDPR.',
                submit: 'Enviar Mensaje',
            },
            success: '¡Mensaje enviado con éxito!',
            successSubtitle: 'Nos pondremos en contacto pronto.',
        },
        blog: {
            title: 'Blog',
            subtitle: 'Artículos y contenidos sobre temas jurídicos relevantes.',
            readMore: 'Leer más',
            categories: 'Categorías',
            allPosts: 'Todos los artículos',
            noPostsFound: 'Ningún artículo encontrado.',
            all: 'Todos',
            searchPlaceholder: 'Buscar artículos...',
        },
        newsletter: {
            title: 'Newsletter',
            subtitle: 'Reciba nuestros contenidos jurídicos directamente en su correo.',
            placeholder: 'Su correo electrónico',
            subscribe: 'Suscribirse',
            consent: 'Al suscribirse, acepta nuestra política de privacidad y el uso de sus datos conforme a la LGPD/GDPR.',
            success: '¡Suscripción realizada con éxito!',
        },
        footer: {
            rights: 'Todos los derechos reservados.',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Uso',
        },
        practiceAreasPage: {
            cta: '¿Necesita asesoría jurídica?',
            ctaSubtitle: 'Contáctenos para agendar una consulta y discutir su cuestión jurídica con un abogado especializado.',
        },
        aboutPage: {
            timeline: 'Trayectoria',
            oabRegistration: 'Registro OAB',
            firmOpening: 'Apertura del Despacho',
            firmOpeningDesc: 'Inicio de actividades en despacho propio en Florianópolis.',
            layJudge: 'Juez Lego',
            layJudgeDesc: 'Nombramiento como Juez Lego en el Juzgado Especial Civil del Foro de Estreito.',
        },
    },
};

// Blog posts data (mock - static content)
const blogPosts = [
    {
        id: 1,
        slug: 'direitos-consumidor-compras-online',
        title: {
            pt: 'Direitos do Consumidor em Compras Online',
            en: 'Consumer Rights in Online Shopping',
            es: 'Derechos del Consumidor en Compras Online',
        },
        excerpt: {
            pt: 'Conheça seus direitos ao realizar compras pela internet e como proceder em caso de problemas.',
            en: 'Learn about your rights when shopping online and how to proceed in case of issues.',
            es: 'Conozca sus derechos al realizar compras por internet y cómo proceder en caso de problemas.',
        },
        content: {
            pt: `<p>Com o crescimento do comércio eletrônico, é fundamental que os consumidores conheçam seus direitos ao realizar compras online. O Código de Defesa do Consumidor (CDC) estabelece garantias específicas para esse tipo de transação.</p>
                 <h3>Direito de Arrependimento</h3>
                 <p>Um dos principais direitos é o de arrependimento (art. 49 do CDC). O consumidor tem o prazo de 7 dias, a contar do recebimento do produto, para desistir da compra sem necessidade de justificativa. O reembolso deve ser total, incluindo o frete.</p>
                 <h3>Troca e Garantia</h3>
                 <p>Caso o produto apresente defeito, o consumidor tem 30 dias (bens não duráveis) ou 90 dias (bens duráveis) para reclamar. A loja tem 30 dias para resolver o problema; caso contrário, o consumidor pode exigir a troca, a devolução do dinheiro ou o abatimento do preço.</p>
                 <h3>Cumprimento da Oferta</h3>
                 <p>Tudo o que for prometido no anúncio (prazo de entrega, características, preço) deve ser cumprido. Se a loja não entregar o prometido, o consumidor pode exigir o cumprimento forçado da oferta.</p>`,
            en: `<p>With the growth of e-commerce, it is essential for consumers to know their rights when shopping online. The Consumer Defense Code (CDC) establishes specific guarantees for this type of transaction.</p>
                 <h3>Right of Withdrawla</h3>
                 <p>One of the main rights is the right of withdrawal (Art. 49 of the CDC). The consumer has a period of 7 days, starting from the receipt of the product, to withdraw from the purchase without the need for justification. The refund must be total, including shipping.</p>
                 <h3>Exchange and Warranty</h3>
                 <p>If the product is defective, the consumer has 30 days (non-durable goods) or 90 days (durable goods) to complain. The store has 30 days to solve the problem; otherwise, the consumer can demand an exchange, a refund, or a price reduction.</p>
                 <h3>Fulfillment of the Offer</h3>
                 <p>Everything promised in the advertisement (delivery time, characteristics, price) must be fulfilled. If the store does not deliver what was promised, the consumer can demand forced fulfillment of the offer.</p>`,
            es: `<p>Con el crecimiento del comercio electrónico, es fundamental que los consumidores conozcan sus derechos al realizar compras online. El Código de Defensa del Consumidor (CDC) establece garantías específicas para este tipo de transacción.</p>
                 <h3>Derecho de Arrepentimiento</h3>
                 <p>Uno de los principales derechos es el de arrepentimiento (art. 49 del CDC). El consumidor tiene un plazo de 7 días, contando desde la recepción del producto, para desistir de la compra sin necesidad de justificación. El reembolso debe ser total, incluyendo el flete.</p>
                 <h3>Cambio y Garantía</h3>
                 <p>Si el producto presenta defecto, el consumidor tiene 30 días (bienes no duraderos) o 90 días (bienes duraderos) para reclamar. La tienda tiene 30 días para resolver el problema; de lo contrario, el consumidor puede exigir el cambio, la devolución del dinero o el descuento del precio.</p>
                 <h3>Cumplimiento de la Oferta</h3>
                 <p>Todo lo prometido en el anuncio (plazo de entrega, características, precio) debe ser cumplido. Si la tienda no entrega lo prometido, el consumidor puede exigir el cumplimiento forzado de la oferta.</p>`,
        },
        category: {
            pt: 'Direito do Consumidor',
            en: 'Consumer Law',
            es: 'Derecho del Consumidor',
        },
        date: '2024-01-15',
    },
    {
        id: 2,
        slug: 'rescisao-contrato-trabalho',
        title: {
            pt: 'Rescisão de Contrato de Trabalho: O que você precisa saber',
            en: 'Employment Contract Termination: What you need to know',
            es: 'Rescisión de Contrato de Trabajo: Lo que necesita saber',
        },
        excerpt: {
            pt: 'Entenda os tipos de rescisão contratual e os direitos do trabalhador em cada situação.',
            en: 'Understand the types of contract termination and worker rights in each situation.',
            es: 'Entienda los tipos de rescisión contractual y los derechos del trabajador en cada situación.',
        },
        content: {
            pt: `<p>A rescisão do contrato de trabalho é o momento de encerramento do vínculo empregatício. Existem diferentes modalidades, cada uma com seus direitos e deveres específicos.</p>
                 <h3>Dispensa Sem Justa Causa</h3>
                 <p>Ocorre quando o empregador decide demitir o funcionário sem um motivo grave. O trabalhador tem direito a aviso prévio, saldo de salário, férias proporcionais + 1/3, 13º salário proporcional, saque do FGTS com multa de 40% e seguro-desemprego.</p>
                 <h3>Pedido de Demissão</h3>
                 <p>Quando o funcionário decide sair. Ele recebe saldo de salário, 13º proporcional e férias proporcionais + 1/3. Não tem direito à multa de 40% do FGTS nem ao seguro-desemprego.</p>
                 <h3>Justa Causa</h3>
                 <p>Acontece quando o empregado comete uma falta grave (art. 482 da CLT). Perde-se o direito a férias proporcionais, 13º proporcional, multa do FGTS e seguro-desemprego. Recebe apenas saldo de salário e férias vencidas.</p>`,
            en: `<p>The termination of the employment contract is the moment the employment relationship ends. There are different modalities, each with its specific rights and duties.</p>
                 <h3>Dismissal Without Cause</h3>
                 <p>Occurs when the employer decides to fire the employee without a serious reason. The worker is entitled to notice, salary balance, proportional vacation + 1/3, proportional 13th salary, withdrawal of the FGTS with a 40% fine, and unemployment insurance.</p>
                 <h3>Resignation</h3>
                 <p>When the employee decides to leave. They receive salary balance, proportional 13th salary, and proportional vacation + 1/3. They are not entitled to the 40% FGTS fine or unemployment insurance.</p>
                 <h3>Termination for Cause</h3>
                 <p>Happens when the employee commits a serious misconduct (Art. 482 of the CLT). They lose the right to proportional vacation, proportional 13th salary, FGTS fine, and unemployment insurance. They only receive salary balance and accrued vacation.</p>`,
            es: `<p>La rescisión del contrato de trabajo es el momento de finalización del vínculo laboral. Existen diferentes modalidades, cada una con sus derechos y deberes específicos.</p>
                 <h3>Despido Sin Justa Causa</h3>
                 <p>Ocurre cuando el empleador decide despedir al empleado sin un motivo grave. El trabajador tiene derecho a aviso previo, saldo de salario, vacaciones proporcionales + 1/3, 13º salario proporcional, retiro del FGTS con multa del 40% y seguro de desempleo.</p>
                 <h3>Renuncia</h3>
                 <p>Cuando el empleado decide salir. Recibe saldo de salario, 13º proporcional y vacaciones proporcionales + 1/3. No tiene derecho a la multa del 40% del FGTS ni al seguro de desempleo.</p>
                 <h3>Justa Causa</h3>
                 <p>Ocurre cuando el empleado comete una falta grave (art. 482 de la CLT). Se pierde el derecho a vacaciones proporcionales, 13º proporcional, multa del FGTS y seguro de desempleo. Solo recibe saldo de salario y vacaciones vencidas.</p>`,
        },
        category: {
            pt: 'Direito Trabalhista',
            en: 'Labor Law',
            es: 'Derecho Laboral',
        },
        date: '2024-01-10',
    },
    {
        id: 3,
        slug: 'contratos-compra-venda-imoveis',
        title: {
            pt: 'Contratos de Compra e Venda de Imóveis',
            en: 'Real Estate Purchase and Sale Contracts',
            es: 'Contratos de Compra y Venta de Inmuebles',
        },
        excerpt: {
            pt: 'Aspectos essenciais a serem observados na elaboração e análise de contratos imobiliários.',
            en: 'Essential aspects to observe when drafting and analyzing real estate contracts.',
            es: 'Aspectos esenciales a observar en la elaboración y análisis de contratos inmobiliarios.',
        },
        content: {
            pt: `<p>A compra e venda de um imóvel é um negócio jurídico complexo que exige atenção aos detalhes contratuais para evitar prejuízos futuros.</p>
                 <h3>Cláusulas Essenciais</h3>
                 <p>Todo contrato deve conter a qualificação completa das partes, descrição detalhada do imóvel (conforme matrícula), preço e forma de pagamento, prazo de entrega das chaves e posse, e cláusula de penalidade em caso de descumprimento.</p>
                 <h3>Due Diligence (Diligência Prévia)</h3>
                 <p>Antes de assinar, é crucial verificar a documentação do imóvel (certidão de ônus reais) e dos vendedores (certidões negativas de débitos e processos). Isso garante que o imóvel não tenha dívidas ou impedimentos para a venda.</p>
                 <h3>Registro em Cartório</h3>
                 <p>Lembre-se: "quem não registra, não é dono". O contrato particular (promessa de compra e venda) deve ser levado a registro no Cartório de Registro de Imóveis para transferir efetivamente a propriedade.</p>`,
            en: `<p>Buying and selling real estate is a complex legal transaction that requires attention to contractual details to avoid future losses.</p>
                 <h3>Essential Clauses</h3>
                 <p>Every contract must contain the complete qualification of the parties, detailed description of the property (according to the registry), price and payment method, deadline for delivery of keys and possession, and penalty clause in case of non-compliance.</p>
                 <h3>Due Diligence</h3>
                 <p>Before signing, it is crucial to verify the documentation of the property (lien certificate) and the sellers (clearance certificates for debts and lawsuits). This ensures that the property has no debts or impediments to the sale.</p>
                 <h3>Registry Office Registration</h3>
                 <p>Remember: "he who does not register is not the owner". The private contract (promise of purchase and sale) must be registered at the Real Estate Registry Office to effectively transfer ownership.</p>`,
            es: `<p>La compra y venta de un inmueble es un negocio jurídico complejo que exige atención a los detalles contractuales para evitar perjuicios futuros.</p>
                 <h3>Cláusulas Esenciales</h3>
                 <p>Todo contrato debe contener la calificación completa de las partes, descripción detallada del inmueble (según matrícula), precio y forma de pago, plazo de entrega de las llaves y posesión, y cláusula de penalidad en caso de incumplimiento.</p>
                 <h3>Due Diligence (Diligencia Previa)</h3>
                 <p>Antes de firmar, es crucial verificar la documentación del inmueble (certificado de cargas) y de los vendedores (certificados negativos de deudas y procesos). Esto garantiza que el inmueble no tenga deudas o impedimentos para la venta.</p>
                 <h3>Registro en Notaría</h3>
                 <p>Recuerde: "quien no registra, no es dueño". El contrato privado (promesa de compra y venta) debe ser llevado a registro en el Registro de Inmuebles para transferir efectivamente la propiedad.</p>`,
        },
        category: {
            pt: 'Direito Civil',
            en: 'Civil Law',
            es: 'Derecho Civil',
        },
        date: '2024-01-05',
    },
    {
        id: 4,
        slug: 'abertura-empresa-mei',
        title: {
            pt: 'Abertura de Empresa e MEI: Guia Completo',
            en: 'Company Formation and MEI: Complete Guide',
            es: 'Apertura de Empresa y MEI: Guía Completa',
        },
        excerpt: {
            pt: 'Passo a passo para abrir sua empresa ou se formalizar como Microempreendedor Individual.',
            en: 'Step by step to open your company or formalize as an Individual Microentrepreneur.',
            es: 'Paso a paso para abrir su empresa o formalizarse como Microemprendedor Individual.',
        },
        content: {
            pt: `<p>Formalizar um negócio é o primeiro passo para o sucesso empresarial. No Brasil, o MEI (Microempreendedor Individual) é a modalidade mais simples para quem está começando.</p>
                 <h3>Quem pode ser MEI?</h3>
                 <p>Pode ser MEI quem fatura até R$ 81.000,00 por ano, não participa de outra empresa como sócio ou titular, e tem no máximo um empregado contratado.</p>
                 <h3>Vantagens</h3>
                 <p>As vantagens incluem CNPJ, emissão de notas fiscais, acesso a benefícios previdenciários (aposentadoria, auxílio-doença) e impostos reduzidos pagos em guia única (DAS).</p>
                 <h3>Outros Tipos de Empresa</h3>
                 <p>Se o negócio crescer ou não se enquadrar no MEI, pode-se optar por ME (Microempresa) ou EPP (Empresa de Pequeno Porte), que permitem maior faturamento e número de funcionários, mas exigem contador e têm tributação mais complexa (Simples Nacional, Lucro Presumido).</p>`,
            en: `<p>Formalizing a business is the first step to business success. In Brazil, the MEI (Individual Microentrepreneur) is the simplest modality for those starting out.</p>
                 <h3>Who can be MEI?</h3>
                 <p>Anyone who earns up to R$ 81,000.00 per year, does not participate in another company as a partner or owner, and has at most one hired employee can be MEI.</p>
                 <h3>Advantages</h3>
                 <p>Advantages include CNPJ, issuing invoices, access to social security benefits (retirement, sick pay), and reduced taxes paid in a single slip (DAS).</p>
                 <h3>Other Company Types</h3>
                 <p>If the business grows or does not fit into MEI, one can opt for ME (Microenterprise) or EPP (Small Business), which allow higher revenue and number of employees, but require an accountant and have more complex taxation (Simples Nacional, Presumed Profit).</p>`,
            es: `<p>Formalizar un negocio es el primer paso para el éxito empresarial. En Brasil, el MEI (Microemprendedor Individual) es la modalidad más simple para quien está comenzando.</p>
                 <h3>¿Quién puede ser MEI?</h3>
                 <p>Puede ser MEI quien factura hasta R$ 81.000,00 por año, no participa de otra empresa como socio o titular, y tiene como máximo un empleado contratado.</p>
                 <h3>Ventajas</h3>
                 <p>Las ventajas incluyen CNPJ, emisión de facturas, acceso a beneficios de seguridad social (jubilación, auxilio enfermedad) e impuestos reducidos pagados en una guía única (DAS).</p>
                 <h3>Otros Tipos de Empresa</h3>
                 <p>Si el negocio crece o no encaja en el MEI, se puede optar por ME (Microempresa) o EPP (Empresa de Pequeño Porte), que permiten mayor facturación y número de empleados, pero requieren contador y tienen tributación más compleja (Simples Nacional, Lucro Presunto).</p>`,
        },
        category: {
            pt: 'Direito Empresarial',
            en: 'Corporate Law',
            es: 'Derecho Empresarial',
        },
        date: '2023-12-20',
    },
    {
        id: 5,
        slug: 'prazos-processuais-civil',
        title: {
            pt: 'Prazos Processuais no Processo Civil',
            en: 'Procedural Deadlines in Civil Process',
            es: 'Plazos Procesales en el Proceso Civil',
        },
        excerpt: {
            pt: 'Entenda como funcionam os prazos no processo civil brasileiro e a importância de respeitá-los.',
            en: 'Understand how deadlines work in the Brazilian civil process and the importance of respecting them.',
            es: 'Entienda cómo funcionan los plazos en el proceso civil brasileño y la importancia de respetarlos.',
        },
        content: {
            pt: `<p>Os prazos processuais são lapsos de tempo estabelecidos por lei para a prática de atos processuais. O desrespeito a eles pode levar à perda de direitos (preclusão).</p>
                 <h3>Contagem em Dias Úteis</h3>
                 <p>Com o Código de Processo Civil de 2015 (CPC/15), os prazos processuais passaram a ser contados apenas em dias úteis, excluindo-se os finais de semana e feriados. Isso trouxe maior qualidade de vida para os advogados.</p>
                 <h3>Prazos Comuns</h3>
                 <p>Alguns prazos importantes: 15 dias para contestação e recursos (apelação, agravo); 5 dias para embargos de declaração.</p>
                 <h3>Perda de Prazo</h3>
                 <p>A perda de um prazo é grave. Se o réu não contesta no prazo, ocorre a revelia (presumem-se verdadeiros os fatos alegados pelo autor). Se não recorre, a decisão transita em julgado (torna-se definitiva).</p>`,
            en: `<p>Procedural deadlines are periods established by law for the practice of procedural acts. Disrespecting them can lead to the loss of rights (preclusion).</p>
                 <h3>Counting in Business Days</h3>
                 <p>With the 2015 Civil Procedure Code (CPC/15), procedural deadlines began to be counted only in business days, excluding weekends and holidays. This brought better quality of life for lawyers.</p>
                 <h3>Common Deadlines</h3>
                 <p>Some important deadlines: 15 days for defense and appeals; 5 days for motion for clarification.</p>
                 <h3>Missed Deadline</h3>
                 <p>Missing a deadline is serious. If the defendant does not answer within the deadline, default judgment occurs (facts alleged by the plaintiff are presumed true). If no appeal is filed, the decision becomes final (res judicata).</p>`,
            es: `<p>Los plazos procesales son lapsos de tiempo establecidos por ley para la práctica de actos procesales. El irrespeto a ellos puede llevar a la pérdida de derechos (preclusión).</p>
                 <h3>Conteo en Días Hábiles</h3>
                 <p>Con el Código de Proceso Civil de 2015 (CPC/15), los plazos procesales pasaron a ser contados solo en días hábiles, excluyendo fines de semana y feriados. Esto trajo mayor calidad de vida para los abogados.</p>
                 <h3>Plazos Comunes</h3>
                 <p>Algunos plazos importantes: 15 días para contestación y recursos (apelación, agravio); 5 días para embargos de declaración.</p>
                 <h3>Pérdida de Plazo</h3>
                 <p>La pérdida de un plazo es grave. Si el demandado no contesta en el plazo, ocurre la rebeldía (se presumen verdaderos los hechos alegados por el autor). Si no recurre, la decisión transita en juzgado (se vuelve definitiva).</p>`,
        },
        category: {
            pt: 'Processo Civil',
            en: 'Civil Procedure',
            es: 'Proceso Civil',
        },
        date: '2023-12-15',
    },
];

// Practice areas services
const areaServices = {
    civil: {
        pt: ['Contratos civis e comerciais', 'Responsabilidade civil', 'Direito de família e sucessões', 'Direitos reais e obrigações', 'Incorporações imobiliárias'],
        en: ['Civil and commercial contracts', 'Civil liability', 'Family and inheritance law', 'Property rights and obligations', 'Real estate developments'],
        es: ['Contratos civiles y comerciales', 'Responsabilidad civil', 'Derecho de familia y sucesiones', 'Derechos reales y obligaciones', 'Incorporaciones inmobiliarias'],
    },
    labor: {
        pt: ['Reclamações trabalhistas', 'Acordos e negociações', 'Rescisões contratuais', 'Cálculos trabalhistas', 'Assessoria empresarial trabalhista'],
        en: ['Labor claims', 'Agreements and negotiations', 'Contract terminations', 'Labor calculations', 'Corporate labor advisory'],
        es: ['Reclamaciones laborales', 'Acuerdos y negociaciones', 'Rescisiones contractuales', 'Cálculos laborales', 'Asesoría empresarial laboral'],
    },
    consumer: {
        pt: ['Defesa do consumidor', 'Ações de indenização', 'Revisão contratual', 'Cobranças indevidas', 'Vícios de produtos e serviços'],
        en: ['Consumer defense', 'Compensation claims', 'Contract review', 'Improper charges', 'Product and service defects'],
        es: ['Defensa del consumidor', 'Acciones de indemnización', 'Revisión contractual', 'Cobros indebidos', 'Vicios de productos y servicios'],
    },
    corporate: {
        pt: ['Constituição de empresas', 'Contratos comerciais', 'Recuperação judicial', 'Falência', 'Assessoria societária'],
        en: ['Company formation', 'Commercial contracts', 'Judicial recovery', 'Bankruptcy', 'Corporate advisory'],
        es: ['Constitución de empresas', 'Contratos comerciales', 'Recuperación judicial', 'Quiebra', 'Asesoría societaria'],
    },
    procedure: {
        pt: ['Elaboração de petições', 'Recursos e agravos', 'Acompanhamento processual', 'Audiências', 'Execuções e cumprimentos de sentença'],
        en: ['Drafting of petitions', 'Appeals and grievances', 'Case monitoring', 'Hearings', 'Executions and judgments enforcement'],
        es: ['Elaboración de peticiones', 'Recursos y agravios', 'Seguimiento procesal', 'Audiencias', 'Ejecuciones y cumplimientos de sentencia'],
    },
};

// Blog categories
const blogCategories = {
    pt: ['Todos', 'Direito Civil', 'Direito Trabalhista', 'Direito do Consumidor', 'Direito Empresarial', 'Processo Civil'],
    en: ['All', 'Civil Law', 'Labor Law', 'Consumer Law', 'Corporate Law', 'Civil Procedure'],
    es: ['Todos', 'Derecho Civil', 'Derecho Laboral', 'Derecho del Consumidor', 'Derecho Empresarial', 'Proceso Civil'],
};

// I18n Manager
class I18nManager {
    constructor() {
        this.currentLocale = this.getStoredLocale() || 'pt';
        this.dictionary = dictionaries[this.currentLocale];
    }

    getStoredLocale() {
        return localStorage.getItem('favero-locale');
    }

    setLocale(locale) {
        if (dictionaries[locale]) {
            this.currentLocale = locale;
            this.dictionary = dictionaries[locale];
            localStorage.setItem('favero-locale', locale);
            this.updatePageContent();
            this.updateLanguageButtons();
        }
    }

    getLocale() {
        return this.currentLocale;
    }

    getDictionary() {
        return this.dictionary;
    }

    getText(path) {
        const keys = path.split('.');
        let value = this.dictionary;
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return path; // Return path if translation not found
            }
        }
        return value;
    }

    updatePageContent() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getText(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getText(key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Update page title based on current page
        this.updatePageTitle();

        // Update blog preview if on home page
        if (document.getElementById('blogPreviewGrid')) {
            this.renderBlogPreview();
        }

        // Update blog page if on blog page
        if (document.getElementById('blogGrid')) {
            this.renderBlogPage();
        }
    }

    updatePageTitle() {
        const pageTitles = {
            'index.html': 'Favero Advocacia | ',
            'about.html': this.getText('nav.about') + ' | Favero Advocacia',
            'practice-areas.html': this.getText('nav.practiceAreas') + ' | Favero Advocacia',
            'blog.html': this.getText('nav.blog') + ' | Favero Advocacia',
            'contact.html': this.getText('nav.contact') + ' | Favero Advocacia',
            'privacy.html': this.getText('footer.privacy') + ' | Favero Advocacia',
            'terms.html': this.getText('footer.terms') + ' | Favero Advocacia',
        };

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (pageTitles[currentPage]) {
            document.title = pageTitles[currentPage];
        }
    }

    updateLanguageButtons() {
        // Update desktop language dropdown
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.currentLocale.toUpperCase();
        }

        // Update dropdown options
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLocale);
        });

        // Update mobile language buttons
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLocale);
        });

        // Update footer language buttons
        document.querySelectorAll('.footer-lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLocale);
        });
    }

    renderBlogPreview() {
        const grid = document.getElementById('blogPreviewGrid');
        if (!grid) return;

        const postsToShow = blogPosts.slice(0, 3);
        grid.innerHTML = postsToShow.map(post => this.createBlogCard(post)).join('');

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    renderBlogPage() {
        const grid = document.getElementById('blogGrid');
        if (!grid) return;

        const selectedCategory = window.selectedBlogCategory || 0;
        const searchQuery = window.blogSearchQuery || '';
        const categories = blogCategories[this.currentLocale];

        let filteredPosts = blogPosts.filter(post => {
            const matchesCategory = selectedCategory === 0 ||
                post.category[this.currentLocale] === categories[selectedCategory];
            const matchesSearch = !searchQuery ||
                post.title[this.currentLocale].toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt[this.currentLocale].toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredPosts.length > 0) {
            grid.innerHTML = filteredPosts.map(post => this.createBlogCard(post)).join('');
        } else {
            grid.innerHTML = `<div class="no-posts"><p>${this.getText('blog.noPostsFound')}</p></div>`;
        }

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    renderBlogPost(slug) {
        // Find post by slug
        const post = blogPosts.find(p => p.slug === slug);

        // If not found, try to find by ID if slug is numeric (fallback)
        // or redirect to blog
        if (!post) {
            if (window.location.protocol.startsWith('http')) {
                // window.location.href = 'blog.html';
            }
            return;
        }

        const container = document.getElementById('blogPostContainer');
        const breadcrumbTitle = document.getElementById('breadcrumbTitle');

        if (container) {
            const locale = this.currentLocale;
            container.innerHTML = `
                <div class="post-header">
                    <div class="post-meta">
                        <span class="post-category">${post.category[locale]}</span>
                        <span>|</span>
                        <span>
                            <i data-lucide="calendar"></i>
                            ${new Date(post.date).toLocaleDateString(locale)}
                        </span>
                    </div>
                    <h1 class="post-title">${post.title[locale]}</h1>
                </div>
                <div class="post-body">
                    ${post.content ? post.content[locale] : post.excerpt[locale]}
                </div>
                <div class="post-footer">
                    <a href="blog.html" class="btn-back">
                        <i data-lucide="arrow-left"></i>
                        ${this.getText('blog.allPosts')}
                    </a>
                </div>
            `;

            // Re-initialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Update Breadcrumb
        if (breadcrumbTitle) {
            breadcrumbTitle.textContent = post.title[this.currentLocale];
        }

        // Update Page Title
        document.title = `${post.title[this.currentLocale]} | Favero Advocacia`;
    }

    createBlogCard(post) {
        const formattedDate = new Date(post.date).toLocaleDateString(this.currentLocale);
        return `
            <article class="blog-card">
                <div class="blog-card-content">
                    <div class="blog-meta">
                        <span class="blog-category">${post.category[this.currentLocale]}</span>
                        <span class="blog-date">
                            <i data-lucide="calendar"></i>
                            ${formattedDate}
                        </span>
                    </div>
                    <h3 class="blog-title">
                        <a href="${post.slug}.html">${post.title[this.currentLocale]}</a>
                    </h3>
                    <p class="blog-excerpt">${post.excerpt[this.currentLocale]}</p>
                    <a href="${post.slug}.html" class="link-arrow">
                        ${this.getText('blog.readMore')}
                        <i data-lucide="arrow-right"></i>
                    </a>
                </div>
            </article>
        `;
    }

    init() {
        this.updatePageContent();
        this.updateLanguageButtons();
        this.setupLanguageSwitchers();
    }

    setupLanguageSwitchers() {
        // Desktop dropdown
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLocale(btn.dataset.lang);
            });
        });

        // Mobile buttons
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLocale(btn.dataset.lang);
            });
        });

        // Footer buttons
        document.querySelectorAll('.footer-lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLocale(btn.dataset.lang);
            });
        });
    }
}

// Export for use in other scripts
window.I18nManager = I18nManager;
window.dictionaries = dictionaries;
window.blogPosts = blogPosts;
window.areaServices = areaServices;
window.blogCategories = blogCategories;
