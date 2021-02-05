//= wrapped
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(function ($translateProvider) {
	$translateProvider.translations('ar', {
		LOGIN: {
			TITLE: 'يرجى تسجيل الدخول',
			USERNAME: 'الاسم',
			PASSWORD: 'الرمز',
			FIRST_TIME_HINT: 'اول مرة تقوم بتسجيل الدخول؟ حاول ادخال \'admin\' بالفراغيين.',
			SUBMIT: 'تسجيل الدخول',
      SESSION_EXPIRED: 'انتهت صلاحية الدخول منذ اخر نشاط. الرجاء تسجيل الدخول مرة اخرى.'
		},
		DASHBOARD: {
      HOME: 'الصفحة الرئيسية',
      TV_SHOWS: 'عرض تلفزيوني',
      MOVIES: 'أفلام',
      MY_LIST:'قائمتي',
			TITLE: 'الواجهة الرئيسية',
			RECOMMENDATIONS: 'افضل الافلام',
			NEW_RELEASES: 'المصدرة حديثا',
			CONTINUE_WATCHING: 'الاستمرار في المشاهدة',
			DISCOVER_SHOWS: 'جميع العروض التلفزيونية',
			DISCOVER_MOVIES: 'جميع الافلام',
			DISCOVER_OTHER_VIDEOS: 'جميع مقاطع الفديو',
			SORT: 'فرز:',
			SEARCH_BY_NAME: 'البحث حول الاسم...',
			FILTER_BY_TAG: 'البحث بحسب...',
			BROWSE_GENRES: 'تصفح',
			LOOKING_AT_GENRE: 'كنت تبحث في هذا النوع:',
			MARK_COMPLETED: 'اكملت المشاهدة',
			NO_TVSHOWS_FOUND: 'لايوجد عروض تلفزيونية',
			NO_MOVIES_FOUND: 'لا يوجد افلام',
      NO_WATCHLIST_FOUND: 'لا يوجد شيء هنا حتى الآن',
      WATCHLIST: 'عرض لاحقا'
		},
		VIDEO: {
			RELEASED: 'الاصدار',
			IMDB: 'IMDB',
			RATING: 'التقييم',
      STATUS: 'Status',
      STATUS_VALUE: {
        'completed': 'Completed',
        'viewing': 'Viewing',
        'unviewed': 'Unviewed'
      },
			VOTES: 'التصويت',
			OVERVIEW: 'نظرة عامة',
			GENRE: 'الصنف',
			TRAILER: 'العرض الدعائي',
			SEASON: 'الموسم',
      NO_SUBTITLE: 'لا يوجد ترجمة'
		},

		MESSAGES: {
			SHARE_SOCKET: 'من خلال إنشاء تسجيل دخول جديد سيتم إعادة توجيهك إلى هذا الفديو، ولكن هذه المرة سيكون لديك معرف جلسة فريدة من نوعها في هذا الرابط. مشاركة هذا مع أصدقائك ليكون لديك تجربة مشاهدة متزامنة معهم!',
			FILE_MISSING: 'هناك مشكلة في هذا المحتوى. يبدو أنك أزلت ملف الفيديو المقترن منه.',
			CODEC_PROBLEM: 'يبدو أن هناك مشكلة في إضافة ملف الفيديو إلى المشغل. هذا هو الأرجح بسبب مشكلة الترميز. حاول تحويلها إلى برنامج ترميز متوافق وإزالة الملف المرفق حاليا وإعادة إضافته. إذا كانت برامج الترميز على ما يرام، تحقق من سجل خطأ الملقم وعنوان الرابط الأساسي في الإعدادات',
			WRONG_BASEPATH: 'لقد تم تضمين الفيديو باستخدام مسار أساسي خاطئ، ولكنك تتصفح الصفحة عبر "{{المسارات}}". تأكد من تعيين المسار الأساسي الصحيح في الإعدادات وأنك تستخدمه لتصفح التطبيق.',
			FILE_IN_FS_NOT_FOUND: 'لا يمكن العثور على الفيديو في أي من المواقع المتاحة للتطبيق. يرجى التحقق من الإعدادات الخاصة بك ونظام الملفات للتأكد من أن الملفات يمكن الوصول إليها من قبل التطبيق.'
		},
		MANAGE_CONTENT: 'تعديل المحتويات',
    MANAGE_SUB_PROFILES: 'إدارة ملفات التعريف',
    WHOS_WATCHING: 'من يشاهد؟',
    ADD_SUB_PROFILE: 'إضافة الملف الشخصي',
    EDIT_BTN: 'تصحيح',
    DONE_BTN: 'فعله',
    SAVE_BTN: 'حفظ',
    CREATE_BTN: 'خلق',
    CANCEL_BTN: 'إلغاء',
    DELETE_BTN: 'حذف',
    ENTER_NAME: 'أدخل الاسم',
    EDIT_PROFILE: 'تعديل الملف الشخصي',
    CREATE_PROFILE: 'إنشاء ملف تعريف',
		ADMIN: 'Admin',
		HELP: 'المساعدة',
		HELP_FAQ: 'المساعدة / الاراء المقدمة',
		PROFILE_SETTINGS: 'اعدادات الحساب',
		LOGOUT: 'تسجيل الخروج',
		CHANGE_PASSWORD: 'تعديل الرمز',
	LANGUAGE_en: 'English/الإنجليزية',
	LANGUAGE_cn: 'Chinese/中文',
    LANGUAGE_ru: 'Русский/الروسية',
    LANGUAGE_de: 'Deutsch/ألمانية',
    LANGUAGE_fr: 'Français/الفرنسية',
    LANGUAGE_es: 'Español/الأسبانية',
    LANGUAGE_kr: '한국어/الكورية',
    LANGUAGE_nl: 'Nederlands/هولندي',
    LANGUAGE_pt: 'Português/البرتغالية',
    LANGUAGE_ja: '日本語/اليابانية',
    LANGUAGE_it: 'Italiano/الإيطالي',
    LANGUAGE_da: 'Dansk/دانماركي',
    LANGUAGE_ar: 'عربى',
		LANGUAGE_hu: 'Magyar/الهنغارية',
		PROFIlE: {
			USERNAME: 'الاسم',
			FULL_NAME: 'الاسم الكامل',
			LANGUAGE: 'اللغة',
			PAUSE_ON_CLICK: 'توقف الفديو عند الظفط',
			FAVORITE_GENRES: 'الانواع المفضلة',
      AMOUNT_OF_MEDIA_ENTRIES: 'عدد الفديوات التي تظهر في الواجهة الرئيسية (قبل الظفط على "المزيد")',
			SAVE: 'حفظ الاعدادات',
			PASS: 'الرمز',
			OLD_PASS: 'الرمز القديم',
			NEW_PASS: 'الرمز الجديد',
			NEW_PASS_PLACEHOLDER: 'الرمز الجديد  (اقل شي. 6 حروف)',
			REPEAT_PASS: 'اعد ادخال الرمز',
			PASS_ERROR_EMPTY: 'الرمز لا يمكن ان يكون فارغ',
			PASS_ERROR_LENGTH: 'الرمز يجب ان يكول على الاقل 6 حروف',
			PASS_ERROR_REPEAT: 'الرمز يحتاج مطابقة',
			SAVE_PASS: 'حفظ الرمز الجديد'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'الافلام المضافة حديثا',
			OLDEST_ADDED: 'اول الافلام المظافة',
			NEWEST_RELEASED: 'الافلام المصدرة حديثا',
			OLDEST_RELEASED: 'الافلام المصدرة قديما',
			NEWEST_AIRED: 'الافلام المبثه حديثا',
			OLDEST_AIRED: 'الافلام المبثة قديما',
      NEWEST_REPORTED: 'احدث التقارير',
      OLDEST_REPORTED: 'اقدم التقارير',
      NEWEST_UPDATED: 'الافلام المحدثة حديثا',
      OLDEST_UPDATED: 'الافلام المحدثة قديما'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'كيف يمككني رفع فديو ؟',
				TEXT: "يمكنك تحميل مقاطع الفيديو من خلال الانتقال إلى قائمة إدارة المحتوى. اختر ما إذا كنت تريد تحميل فيلم أو برنامج تلفزيوني أو فيديو آخر. انقر على خيار القائمة الفرعية ذات الصلة" +
				" على شريط التنقل العمودي على الجانب الأيسر من الشاشة. يمكنك تحميل فيديو بالنقر على الزر إنشاء فيلم جديد / عرض تلفزيوني / فيديو آخر أو عن طريق الكتابة" +
				" واسم الفيديو الذي تريد تحميله إلى شريط البحث وتحديد الفيلم ذي الصلة من نتائج البحث. بعد ذلك، يمكنك اختيار لملء الفيديو " +
				" المعلومات إما يدويا أو تحميل معلوماتها من ثيموفيدب. بعد ذلك، يمكنك تحميل ملفات الفيديو والترجمة الفرعية عن طريق النقر على زر إدارة الملفات."
			},
			DELETE_VIDEO: {
				TITLE: 'كيف يمككني حذف فديو ؟',
				TEXT: "يمكنك حذف مقطع فيديو بالانتقال إلى صفحة معلومات الفيديو والنقر على إدارة الملفات وتحديد رمز سلة المهملات الحمراء. النقر على تعديل الفيلم وتحديده" +
				" حذف الفيلم هو طريقة أخرى للقيام بذلك. يمكنك أيضا استخدام إدارة الملفات الموجودة في قائمة إدارة المحتوى. يمكنك مشاهدة جميع الملفات التي قمت بتحميلها هناك. انقر" +
				" يمكن رمز سلة المهملات الحمراء لحذف ملف."
			},
			VIDEO_FORMATS: {
				TITLE: 'ما هيه صيغ الفديو القابلة للرفع ؟',
				TEXT: "ستريما يدعم حاليا فقط صيغ ملفات الفيديو التي يدعمها مشغل HTML5. يمكنك اختبار ما إذا كان ملف الفيديو الخاص بك هو مشغل HTML5 متوافق عن طريق سحب وإسقاط" +
				" الملف إلى علامة تبويب فارغة على المتصفح الخاص بك."
			},
			SUBTITLES: {
				TITLE: 'كيف يمككني اضافة الترجمة ؟',
				TEXT: "يمكنك إضافة ترجمات مصاحبة إلى مقاطع الفيديو بالنقر على زر إدارة الملفات الموجود في صفحة معلومات الفيديو. يمكنك سحب وإسقاط ملفات الترجمة هناك." +
				" سابقا كان لديك لتحويلها يدويا إلى تنسيق ملف متوافق، ولكن ليس بعد الآن! الآن تطبيق يعالج ذلك بالنسبة لك."
			},
			INVITE_USERS: {
				TITLE: 'كيف يمككني دعوة اصدقائي ؟',
				TEXT:"يمكنك مشاركة مقاطع الفيديو الخاصة بك مع أصدقائك من خلال دعوتهم لاستخدام ستريما استضافتها. انتقل إلى قائمة المستخدمون وانقر على زر دعوة المستخدم. املأ نموذج الدعوة و" +
				" حدد دور المدعو (الضيف). المستخدمون الذين لديهم الدور يمكن للمشرف تعديل المستخدمين والإعدادات. يمكن للمستخدمين الذين لديهم دور مدير المحتوى تعديل المحتوى. سيتم إبلاغ صديقك بالدعوة" +
				" الدعوة عبر البريد الإلكتروني. يمكنك أيضا مشاركة جلسات الفيديو مع أصدقائك من خلال النقر على زر مشاركة مشغل الفيديو وربط عنوان ورل للجلسة لهم."
			},
			BASE_URL: {
				TITLE: "ما عنوان الرابط الأساسي وكيف يجب أن أهيئه؟",
				TEXT: "يتم استخدام عنوان الرابط الأساسي لمقاطع الفيديو والرابط في رسالة الدعوة الإلكترونية."
			},
			NOTIFICATIONS: {
				TITLE: "ماهي الاشعارات ؟",
				TEXT: "أو يمكن أن يبلغ أصدقائك المدعوين حول أشرطة الفيديو التي تم تحميلها عن طريق إرسال رسائل لاعلامهم. يمكنك إرسالها عن طريق إضافتها إلى قائمة انتظار الإشعار بالنقر" +
				" يمكنك إضافة زر إشعارات في صفحة معلومات الفيديو والذهاب إلى قائمة الإشعارات والنقر على زر إرسال قائمة انتظار."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "هل لمشغل الفديو مفاتيح مختصرة ؟",
				TEXT: "نعم فعلا. إيقاف مؤقت / إلغاء الإيقاف المؤقت: مساحة. إدارة وحدة التخزين: مفاتيح الأسهم لأعلى أو لأسفل. تخطي الفيديو إلى الأمام / الخلف: مفاتيح الأسهم إلى اليسار أو اليمين. تخطي طويل" +
				" التحكم + مفاتيح الأسهم اليسار أو اليمين. ملء الشاشة تشغيل / إيقاف: ألت + إنتر. ترجمات / إيقاف: S، كتم الصوت: M، العودة إلى السابق" +
				" الشاشة: حذف أو مسافة للخلف."
			},
			FAVORITE_GENRES: {
				TITLE: "كيف تؤثر الأنواع المفضلة للمستخدم على مجموعات البث؟",
				TEXT: "قريبا..."
			},
			USEFUL_LINKS: {
				TITLE: "روابط مفيدة",
				TEXT: "قريبا..."
			}
		}
	});
});
