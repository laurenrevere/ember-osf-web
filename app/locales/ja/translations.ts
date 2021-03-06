/* tslint:disable:object-literal-sort-keys max-line-length */

export default {
    general: {
        OSF: 'OSF',
        share: '共有',
        embed: '埋込み',
        download: 'ダウンロード',
        download_url: 'Download url',
        delete: '削除',
        view: '表示',
        edit: '編集',
        cancel: 'キャンセル',
        revisions: 'バージョン管理',
        md5: 'MD5',
        date: '日付',
        sha2: 'SHA2',
        title: 'タイトル',
        contributors: '共同研究者',
        modified: '変更',
        description: '説明',
        create: '作成',
        and: 'と',
        or: 'or',
        more: '詳細',
        upload: 'アップロード',
        rename: '名前の変更',
        move: '移動',
        name: 'ファイル名',
        size: 'ファイルサイズ',
        version: 'バージョン',
        downloads: 'ダウンロード',
        close: '閉じる',
        back: '戻る',
        filter: 'フィルター',
        revert: '復帰',
        save: '保存',
        ellipsis: '\u2026',
        warning: '警告',
        clipboard_copy: 'クリップボードへコピー',
        sort_asc: '昇順ソート',
        sort_desc: '降順ソート',
        sort: 'ソート',
        asc_paren: '(昇順)',
        desc_paren: '(降順)',
        next: '次へ',
        previous: '戻る',
        help: 'ヘルプ',
        api: 'API',
        cos: 'Center for Open Science',
        home: 'ホーム',
        period: '。',
        hosted_on_the_osf: 'Hosted on OSF',
    },
    maintenance: {
        line1: '本サイトは<strong>{{start}}から{{end}}</strong> ({{utc}} UTC)時の間メンテナンスを実施します。',
        line2: 'ご不自由をおかけいたしますが、ご協力どうぞよろしくお願いいたします。',
        title: 'お知らせ:',
    },
    quickfiles: {
        title: '{{user-name}}のクイックファイル',
        description: 'ここにアップロードされたファイルは<b>一般公開</b>されており、共有リンクを使用して他のユーザーと簡単に共有できます。',
        feedback_dialog_text: 'クイックファイルの考え方を我々に教えて下さい',
        transition_auth: 'クイックファイルを表示するには、ログインしている必要があります。ログインページにリダイレクトします。',
        share_by_email: 'Share by email',
    },
    feedback: {
        button_text: 'フィードバック',
        placeholder: 'フィードバックをCOSと共有',
        follow_up_label: 'OSFを改善するさらなる機会について私に連絡してください',
        title: 'フィードバックの提出',
        confirm_button_text: '送信',
        thank_you: 'ありがとうございます',
        success: 'あなたからのフィードバックは提出されました',
        dismiss: '了解',
    },
    file_detail: {
        version: {
            id: 'バージョンID',
            title: '(バージョン: {{version-number}})',
        },
        embed: {
            dynamic: 'JavaScriptを用いたダイレクトレンダーiframe',
            direct: '高さと幅を固定したダイレクトiframe',
        },
        tags: 'タグ:',
        toggle: 'ビュー切替:',
        delete_file: {
            question: 'ファイルを削除しますか？',
            confirm: '本当に <b>{{file-name}}</b> を削除してもよろしいでしょうか？',
        },
        sha2_description: 'SHA-2は、データの完全性を検証するために使用されるNSAによって設計された暗号ハッシュ関数です。',
        md5_description: 'MD5は、データの完全性を検証するために使用されるアルゴリズムです。',
        // toast messages
        delete_success: 'ファイルが削除されました',
        delete_fail: 'エラー、ファイルを削除できません',
        save_success: 'ファイルが保存されました',
        save_fail: 'エラー、ファイルを保存できません',
        mfr_iframe_title: 'ドキュメントのレンダリング',
        add_tag: '検索性を高めるタグを追加する',
        embed_js_label: 'Embeddable javascript',
        embed_iframe_label: 'Embeddable iframe',
    },
    file_browser: {
        loading: 'ローディング中...',
        delete_multiple: '複数削除',
        download_zip: 'Zipでダウンロード',
        drop_placeholder: 'アップロードするファイルをここにドロップ',
        drop_reminder: 'アップロードするファイルをドロップ',
        no_files: 'このユーザーはクイックファイルをアップロードしていません',
        share_title: '共有',
        clipboard_copy: 'クリップボードへコピー',
        info: {
            title: 'ファイルブラウザの使い方',
            upload: '<b>アップロード:</b>ドラッグアンドドロップまたはアップロードボタンをクリックして、ファイルをアップロードします。',
            select: '<b>行を選択:</b>行をクリックすると、ツールバーにさらにアクションが表示されます。 複数のファイルを選択するには、commandキーまたはshiftキーを使用します。',
            folders: '<b>フォルダ:</b>サポートされていません; 多くのファイルをアップロードおよび管理するためのOSFプロジェクトを検討してください。',
            open1: '<b>ファイルを開く:</b>ファイル名をクリックすると、OSF内のファイルが表示されます。',
            open2: '<b>新規タブでファイルを開く:</b> command（WindowsではCtrl）を押し、ファイル名をクリックして新しいタブで開きます。',
            download: '<b>Zipでダウンロード:</b> ツールバーの [Zipでダウンロード] ボタンをクリックすると、すべてのファイルが.zipとしてダウンロードされます。',
        },
        delete_modal: {
            title: '"{{selectedItems.firstObject.itemName}}"を削除しますか?',
            title_multiple: '複数削除しますか？',
            body: 'この操作は不可逆的です',
        },
        conflict_modal: {
            title: '{{textValue}}という名前のアイテムは、この場所に既に存在します。',
            keep_info: '"両方を保持"は、両方のファイル（およびそのバージョン履歴）をこの場所に保持します。',
            replace_info: '"置換"は、この場所にある既存のファイルを上書きします。 上書きされたファイルの以前のバージョンは失われます。 移動したファイルの以前のバージョンを保持します。',
            keep_button: '両方を保持',
            replace_button: '置換',
        },
        move_modal: {
            title: 'プロジェクトへファイルを移動',
            move_button: 'ファイルを移動',
        },
        filtering: 'フィルタリング',
        file_added: 'このファイルは追加されました。',
        file_added_toast: 'ファイルが追加されました。',
        file_replaced: 'このファイルは置換されました。',
        file_deleted: 'このファイルは削除されました。',
        delete_failed: '削除に失敗しました。',
        successfully_moved: '移動に成功しました',
    },
    dashboard: {
        page_title: 'ホーム',
        title: 'ダッシュボード',
        create_new_project_button: '新規プロジェクト作成',
        quicksearch: {
            search: 'マイプロジェクト内の検索',
            other_links: 'あなたの仕事を整理したり、OSFを<a href="/search/">検索</a>するには、<a href="/myprojects/">My Projects</a>へ行きます。',
            no_results: 'プロジェクトが見つかりません',
            no_projects: {
                line1: 'まだプロジェクトがありません。画面右上のボタンからプロジェクトを作成して下さい。',
                line2: 'この機能を使用すると、プロジェクトを検索してすばやくアクセスできます。',
                preview_alt: 'クイックプロジェクトの全画面プレビュー',
            },
            private_parent: '非公開プロジェクト / ',
            private_grandparent: '非公開プロジェクト / 非公開 / ',
        },
        noteworthy: {
            description: '公開プロジェクトの検索',
            new_and_noteworthy: '新着と注目',
            failed_noteworthy: '"新着と注目"プロジェクトのローディングに失敗しました。',
            most_popular: '最人気',
            failed_popular: '"最人気"プロジェクトのローディングに失敗しました。',
            search_more: '更にプロジェクトを探す',
            by: 'by',
        },
        meetings: {
            title: '学会や研究会をホスティングしますか？',
            description: 'OSF for Meetings サービスを使用し、学術集会への投稿するためのポータルを提供します。',
            button: '学術集会の表示',
        },
        preprints: {
            title: '最新の研究を閲覧',
            description: 'さまざまな研究分野をカバーするOSFで、ホストされている最新のプレプリントをご覧ください。',
            button: 'プレプリントの表示',
        },
    },
    new_project: {
        header: '新規プロジェクト作成',
        title_placeholder: 'プロジェクトタイトルの入力',
        more: '詳細',
        affiliation: '所属',
        remove_all: '全件削除',
        select_all: '全件選択',
        no_matches: '一致しません',
        description_placeholder: 'プロジェクト説明の入力',
        template_title: 'テンプレート（オプション）',
        template_search_help: 'プロジェクトを検索するタイピングの開始。テンプレートとしてプロジェクトを選択すると、そのプロジェクトの内容をインポートせずにその構造が新しいプロジェクトに複製されます。',
        template_placeholder: 'テンプレートとして使用するプロジェクトを選択する',
        success_message: '新規プロジェクトの作成に成功しました',
        stay_here: 'この場に留まる',
        go_to_new: '作成したプロジェクトへ移動',
    },
    banners: {
        prereg: {
            description: 'あなたの次の研究を改善してください。 Prereg Challengeに参加すれば$ 1,000を獲得できます。',
            button: 'Prereg Challengeをはじめる',
        },
    },
    move_to_project: {
        create_new_project: '新規プロジェクトの作成',
        connect_to_existing: '既存のOSFプロジェクトへファイルを接続する',
        enter_project_title: 'プロジェクトタイトルの入力',
        new_project_message: 'ファイル用の新しいパブリックプロジェクトを作成することを選択しました。 プロジェクトがプライベートにならない限り、ユーザーは引き続きファイルにアクセスできます。',
        choose_project: 'プロジェクトを選択',
        select_placeholder: 'Click to select',
        project_select_message: '表示されるプロジェクトのリストは、書き込みアクセス権を持つプロジェクトとコンポーネントです。 登録はここには含まれていません。',
        no_projects_exist_error: '利用可能なプロジェクトはありません。 新しいプロジェクトを作成するには、元に戻ってください。',
        could_not_create_project: 'プロジェクトを作成できませんでした。 もう一度お試しください。',
        convert_or_copy_message: {
            project: '"ファイルの移動"をクリックすると、すぐにOSFプロジェクトが変更され、ファイルが移動されます。',
            component: '"ファイルの移動"をクリックすると、すぐにOSFコンポーネントが変更され、ファイルが移動されます。',
        },
        no_longer_public_warning: {
            project: '非公開プロジェクトに移動されたファイルは公開されなくなり、他のユーザーによって発見されなくなります。',
            component: 'プライベートコンポーネントに移動されたファイルは公開されなくなり、他のユーザーによって検出されなくなります。',
        },
        file_successfully_moved: 'ファイルは正常に移動されました！',
        could_not_move_file: 'ファイルを移動できませんでした。 もう一度お試しください',
        keep_working_here: 'ここで作業を続ける',
        go_to_new_project: '新規プロジェクトへ移動',
        go_to_component: 'コンポーネントへ移動',
        go_to_project: 'プロジェクトへ移動',
    },
    navbar: {
        add: '追加',
        add_a_preprint: '{{preprintWords.preprint}}を追加',
        browse: '探す',
        cancel_search: '検索をキャンセル',
        donate: '寄付',
        go_home: 'ホームへ',
        my_projects: 'マイプロジェクト',
        my_quick_files: 'マイクイックファイル',
        reviews: 'マイレビュー',
        search: '検索',
        search_help: '検索ヘルプ',
        search_the_OSF: 'OSF内を検索',
        send_search: '検索クエリの送信',
        support: 'サポート',
        toggle_primary: 'プライマリー・ナビゲーション切替',
        toggle_secondary: 'セカンダリー・ナビゲーション切替',
        other_views: 'Other OSF views',
    },
    auth_dropdown: {
        log_out: 'ログアウト',
        my_profile: 'マイプロファイル',
        osf_support: 'OSFサポート',
        settings: '設定',
        sign_up: '新規登録',
        sign_in: 'ログイン',
        user_gravatar: 'ユーザーgravatar',
        toggle_auth_dropdown: 'authドロップダウンの切替',
    },
    search_help_modal: {
        close: '閉じる',
        search_help: 'ヘルプを検索',
        queries: 'クエリ',
        paragraph: '検索は、<a href={{link}}>Lucene検索シンタックス</a>を使用します。 これは多くのオプションを提供しますが、非常にシンプルにすることもできます。 有効な検索の例は次のとおりです。',
    },
    support: {
        title: 'サポート',
        faq_title: 'よくあるご質問',
        faq_paragraph: 'どうすれば無料になるのですか？ OSFは私の研究にどのように役立つでしょうか？ 登録とは何ですか？ OSFに関する質問は、',
        faq_link_text: 'FAQ',
        faq_button: 'FAQへ',
        guides_title: 'OSFガイド',
        guides_paragraph_1: '研究ワークフローを改善するためにOSFを使用する方法を学びます。 私たちを読む',
        guides_link_text: 'ガイド',
        guides_paragraph_2: 'プロジェクトの構造、バージョン管理、プライバシー、ファイル、アドオンサポートなどの基本を示すステップバイステップのスクリーンショットがあります。',
        guides_button: 'ガイドを訪問',
        contact_title: '連絡する',
        contact_technical: 'テクニカルサポートの電子メール：',
        contact_questions: 'その他の質問やコメント：',
        prereg_title: 'Prereg Challengeに関する質問はありますか？',
        prereg_paragraph_1: '調査して下さい、我々の',
        prereg_link_text: 'Preregセクション',
        prereg_paragraph_2: 'cos.io ウェブサイト上を',
        status_title: 'あなたは私たちのサービスでダウンタイムを経験していますか？',
        status_paragraph_1: '調査して下さい、我々の',
        status_link_text: 'ステータスページ',
        status_paragraph_2: '私たちのサービスがどのように動作しているかについての更新情報。',
        consultation_title: '統計コンサルティングをお探しですか',
        consultation_paragraph: 'COSは統計コンサルティングを提供します。 このサービスの詳細については、',
        consultation_link_text: 'COS統計コンサルティングページ。',
        social_title: '助けを得るための他の方法',
        social_twitter: 'Twitterで質問',
        social_mailing: '我々のメーリングリストへ参加',
        social_facebook: 'Facebookでフォロー',
        social_github: 'COSのGitHubとコンタクト',
    },
    not_found: {
        title: 'ページが見つかりません',
        body: '要求されたリソースが見つかりませんでした。これが発生してはならず、問題が解決しない場合は、サポート<a href="mailto:{{supportEmail}}">{{supportEmail}}</a>へ報告してください',
    },
    zoom_to_guid: {
        title: 'このアプリ内のGUIDに直行する',
        zoom: '直行!',
        placeholder: 'GUIDを入力',
    },
    osf_mode_footer: {
        dev_mode: 'このサイトは開発モードで動作しています。',
    },
    footer: {
        status: 'ステータス',
        faq: 'FAQ/ガイド',
        source_code: 'ソースコード',
        rpp: '再現性プロジェクト: 心理学',
        rpcb: '再現性プロジェクト: がん生物学',
        top: 'トップ ガイドライン',
        donate: '寄付',
        socialize: 'ソーシャライズ',
        contact: 'コンタクト',
        copyright: 'Copyright &copy; 2011-{{currentYear}}',
        terms: '利用規約',
        privacy: 'プライバシーポリシー',
        separator: ' | ',
    },
    home: {
        title: 'ホーム',
        youtube_modal_title: 'OSFを使い始める',
        alert_logged_out: 'あなたは正常にログアウトしました。',
        brand: 'Open Science Framework',
        tagline: '研究サイクル全体をつなぐ学術コモンズ',
        youtube_label: 'OSF YouTube ビデオ',
        osf_screenshot_alt: 'OSFのスクリーンショット',
        signup_title: '無料でオープンソース。 今すぐ始めましょう。',
        collaboration: '簡略化された学術コラボレーション',
        management: 'あなたのプロジェクトのためのクラウドベースの管理。',
        structured_projects_title: '構造化プロジェクト',
        structured_projects_paragraph: 'すべてのファイル、データ、プロトコルを<strong>一元化した場所</strong>に保管してください。 ファイルを見つけたり、紛失したデータから回復するために大騒ぎしたりする電子メールはこれ以上漁らせません。',
        secure_cloud: 'セキュアクラウド',
        control_access_title: 'アクセス制御',
        control_access_paragraph: '<strong>プロジェクトのどの部分を公開または非公開にするかを制御することで</strong>、世界中のコミュニティやチームと簡単にコラボレーションすることができます。',
        control_access_span: 'プロジェクトレベル パーミッション',
        workflow_title: 'あなたのワークフローを尊重する',
        workflow_paragraph: '<strong>あなたのお気に入りのサードパーティサービスをOSFに直接接続してください。</strong>',
        workflow_span: 'サードパーティインテグレーション',
        student_main: '"OSFは、お気に入りの外部サービスを使用しながら、コラボレーションして組織を整える素晴らしい方法です。"',
        student_attrib: '<strong>Kara Woo</strong> - ワシントン州の水生生態系情報マネージャー',
        integrations_title: 'OSFの統合により、<strong>ワークフローの効率化</strong>',
        integrations_alt_dropbox: 'Dropbox ロゴ',
        integrations_alt_github: 'Github ロゴ',
        integrations_alt_amazon: 'Amazon S3 ロゴ',
        integrations_alt_box: 'Boxロゴ',
        integrations_alt_google: 'Google Drive ロゴ',
        integrations_alt_figshare: 'Figshare ロゴ',
        integrations_alt_dataverse: 'Dataverse ロゴ',
        integrations_alt_mendeley: 'Mendeley ロゴ',
        features_title: 'あなたの研究が成功するために必要な<strong>すべて</strong>のもの',
        features_manage_title: 'あなたのプロジェクトを管理する',
        features_manage_paragraph: '<strong>1つのダッシュボード</strong>からすべてのプロジェクトを表示します。',
        features_share_title: 'すばやくファイルを共有',
        features_share_paragraph: '<strong>主要なプロジェクト情報を共有</strong>し、他の人がそれを使用して引用できるようにする。',
        features_changes_title: 'プロジェクトの変更を見る',
        features_changes_paragraph: '貢献している<strong>履歴ファイルのバージョン</strong>と最新のプロジェクトの変更を参照してください。',
        features_analytics_title: 'プロジェクト分析の表示',
        features_analytics_paragraph: '時間の経過による訪問からトップ参照Webサイトまでの<strong>プロジェクトデータ</strong>にアクセスします。',
        features_archive_title: 'データをアーカイブする',
        features_archive_paragraph: 'コンピュータや共同作業者が爆発する？ <strong>OSFでは、プロジェクトデータを失うことはありません。</strong>',
        features_collaboration_title: 'アクセスとコラボレーションの制御',
        features_collaboration_paragraph: '共同作業のために他のものをプロジェクトに追加するか、ビューにプライベートアクセスを提供します。',
        features_workflow_title: 'ワークフローを盛り上げる',
        features_workflow_paragraph: 'OSFは、個人、チーム、研究室が<strong>研究プロセスをより効率的にする</strong>のに役立ちます。',
        features_registration_title: '登録',
        features_registration_paragraph: 'データ収集の開始など、<strong>ライフサイクルの重要な部分でプロジェクトの状態を保持する。</strong>',
        global_title: 'グローバルな科学的取り組みに<strong>貢献する</strong>',
        global_paragraph: '世界中のラボやチームは、オープンサイエンスフレームワークを使用して科学的コミュニティまでプロジェクトを開きます。 最新の最も人気のある公開プロジェクトを閲覧することができます',
        global_link: 'ここに。',
        global_label: '参加する',
        non_profit_title: '私たちは、<strong>ミッションドリブンの非営利組織</strong>です',
        non_profit_paragraph1: 'OSFは無料のオープンソースサービスであり、',
        non_profit_link: 'Center for Open Science.',
        non_profit_paragraph2: '私たちは、研究のオープン性、完全性、再現性を向上させることによって、科学的実践を科学的価値観と調和させています。',
        non_profit_label: '非営利',
        users_title: '<strong>教師、研究者、およびグローバルチーム</strong>は、OSF',
        users_1_alt: 'Richard Ball',
        users_1_title: '研究を再現性と検証可能にする',
        users_1_paragraph: 'OSFは、生徒が健全なデータ管理原則を理解し、適用するのに役立ちます。また、学生が作業しているすべてのファイルに簡単にアクセスできるので、建設的な指導を提供する能力が大幅に向上します。',
        users_1_small: 'Richard Ball, ハーバードカレッジの経済学教授',
        users_2_title: 'バージョン管理により生活が楽になります',
        users_2_paragraph: 'OSFによって、バージョン管理が簡単になります。私のPI、私の研究室の仲間、いつでも以前のバージョンのファイルにアクセスすることができます。最新バージョンはいつでもすぐに入手できます。',
        users_2_small: 'Erica Baranski, 博士課程学生, 社会心理学Funder研究室, カリフォルニア大学リバーサイド校',
        users_2_alt: 'Erica Baranski',
        users_3_alt: 'Anne Allison',
        users_3_title: '情報の集中型ハブ',
        users_3_paragraph: 'OSFは、複数のクラスにわたる多様な研究プロジェクトを監督できる情報の集中型ハブを作成します。集中化、組織化、どこからのアクセスも、これらのプロジェクトを管理するのに必要な時間とエネルギーを節約できます。',
        users_3_small: 'Anne Allison, ピエモント・バージニア・コミュニティ大学の生物学の准教授',
        free_title1: '無料でオープンソース。',
        free_title2: 'OSFはあなたの研究をサポートするために作られた公共財です。',
        free_link: '始めよう',
    },
    sign_up_form: {
        full_name: 'フルネーム',
        contact_email: 'コンタクトemail',
        confirm_email: 'emailの確認',
        password: 'パスワード',
        sign_up_free: '無料サインアップ',
        password_placeholder: 'パスワード（{{min}〜{{max}}文字である必要があります）',
        registration_success: '登録に成功。{{email}}にメールアドレスを確認してください。',
    },
    sign_up_policy: {
        paragraph: '「無料で登録」をクリックすると、<a href="{{link1}}">利用規約</a>に同意し、<a href="{{link3}}">Cookieの使用</a>に関する情報を含む<a href="{{link2}}">プライバシーポリシー</a>を読んだことになります。',
    },
    validationErrors: {
        description: 'このフィールド',
        inclusion: '{{description}}はリストに含まれていません',
        exclusion: '{{description}}は予約されています',
        invalid: '{{description}}は無効です',
        confirmation: '{{description}}は{{on}}と一致しません',
        accepted: '{{description}}は受け入れられなければなりません',
        empty: '{{description}}は空ではありません',
        blank: '{{description}}は空白にできません',
        present: '{{description}}は空白でなければなりません',
        collection: '{{description}}はコレクションでなければなりません',
        singular: '{{description}}はコレクションではありません',
        tooLong: '{{description}}は長すぎます（最大は{{max}}です）',
        tooShort: '{{description}}が短すぎます（最小値は{{min}}です）',
        before: '{{description}}は{{before}}の前にある必要があります。',
        after: '{{description}}は{{after}}の後になければなりません。',
        wrongDateFormat: '{{description}}は{{format}}の形式でなければなりません。',
        wrongLength: '{{description}}の長さが間違っています（{{is}}文字）',
        notANumber: '{{description}}は数字でなければなりません',
        notAnInteger: '{{description}}は整数でなければなりません',
        greaterThan: '{{description}}は{{gt}}より大きくなければなりません。',
        greaterThanOrEqualTo: '{{description}}は{{gte}}以上でなければなりません。',
        equalTo: '{{description}}は{{is}}と等しくなければなりません。',
        lessThan: '{{description}}は{{lt}}未満でなければなりません。',
        lessThanOrEqualTo: '{{description}}は{{lte}}以下でなければなりません。',
        otherThan: '{{description}}は{{value}}以外のものでなければなりません。',
        odd: '{{description}}は奇数でなければならない',
        even: '{{description}}は偶数でなければならない',
        positive: '{{description}}は陽性でなければなりません',
        date: '{{description}}は有効な日付でなければなりません',
        onOrAfter: '{{description}}は{{onOrAfter}}の後またはそれ以降でなければなりません。',
        onOrBefore: '{{description}}は{onOrBefore}}の前またはそれ以前でなければなりません。',
        email: '{{description}}は有効なメールアドレスである必要があります',
        phone: '{{description}}は有効な電話番号でなければなりません',
        url: '{{description}}は有効なURLである必要があります',
        // custom
        email_registered: 'このメールアドレスはすでに登録されています。',
        email_match: 'メールアドレスは一致する必要があります。',
        password_email: 'パスワードはあなたのメールアドレスと同じであってはなりません。',
        password_old: '新しいパスワードと古いパスワードを同じにすることはできません。',
        password_match: 'パスワードが一致する必要があります。',
        recaptcha: 'reCAPTCHAを完了してください',
    },
    node_navbar: {
        toggle: 'Toggle navigation',
        project_nav: 'Project Navigation',
        wiki: 'Wiki',
        analytics: 'Analytics',
        registrations: 'Registrations',
        files: 'Files',
        contributors: 'Contributors',
        addons: 'Add-ons',
        settings: 'Settings',
        comments: 'Comments',
    },
    status: {
        welcome_message: '<h1>OSFへようこそ！</h1><p>プロジェクトの作成方法や<a href="https://osf.io/explore/activity/#popularPublicProjects">ポピュラーな公開プロジェクト</a>からのインスピレーションを得るには、<a href="http://help.osf.io/" target="_blank" rel="noreferrer">ガイド</a>をご覧ください。</p>',
        alternate_email_error: 'メールアドレスはあなたのアカウントに<b>追加されていません</b>。ログアウトして、あなたのメールのリンクを再訪してください。ありがとうございました。',
        remove_addon: '{{extra.category}} "{{extra.title}}" のためのGitHubアドオンは {{extra.user}} によって認証されているため、認証情報は削除されています。',
        project_deleted: 'プロジェクトは正常に削除されました。',
        component_deleted: 'コンポーネントが正常に削除されました。',
        remove_self_contrib: 'あなたはこのプロジェクトからあなた自身を削除しました。',
    },
    dropzone_widget: {
        drop_files: 'アップロードするファイルをここにドロップして下さい',
        error_multiple_files: '複数のファイルをアップロードできません',
        error_directories: 'ディレクトリ、アプリケーション、またはパッケージをアップロードできません。',
    },
    join_osf: {
        header: 'Start managing your projects on OSF today.',
        pitch: 'Free and easy to use, OSF supports the entire research lifecycle: planning, execution, reporting, archiving, and discovery.',
        create_account: 'Create an account',
        learn_more: 'learn more',
        hide_message: 'Hide this message',
    },
    social: {
        twitter: 'Twitter',
        facebook: 'Facebook',
        google_group: 'Google Group',
        github: 'GitHub',
        google_plus: 'Google Plus',
        linkedin: 'LinkedIn',
    },
};
