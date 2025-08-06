"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDownIcon, CheckCircleIcon, LightBulbIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-white">
      {/* プログレスバー */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ヘッダー */}
      <motion.header 
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DX</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">筑邦銀行 × UPHASH</h1>
                <p className="text-xs text-gray-500 font-inter">Digital Transformation Proposal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#vision" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">ビジョン</a>
              <a href="#solution" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">ソリューション</a>
              <a href="#stack" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">技術スタック</a>
              <a href="#contact" className="btn-primary text-sm !py-2 !px-6">お問い合わせ</a>
            </nav>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        {/* アニメーション背景 */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="container-custom relative z-10 text-center"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              限定公開資料
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block mb-2">理解できない・動けない</span>
              <span className="block gradient-text">日本企業を技術で変える</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              生成AIや技術革新に関心はあるが、実際には何も始まっていない企業の現実を打破。
              筑邦銀行とUPHASHが提供する外部伴走型の技術エデュケーション支援
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#vision"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                提案内容を見る
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.button 
                className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                資料ダウンロード
              </motion.button>
            </div>
          </motion.div>

          {/* 統計情報 */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: "ChatGPT未経験", value: "80%", desc: "社員の割合" },
              { label: "業務効率化", value: "30%", desc: "期待効果" },
              { label: "導入期間", value: "3ヶ月", desc: "標準サポート" },
              { label: "成功率", value: "95%", desc: "継続利用率" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-900 mt-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDownIcon className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* 現状の課題 */}
      <section id="vision" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">PROBLEM</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">日本企業が直面する現実</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              デジタル変革の必要性は理解しているが、実行に移せない企業が大多数を占めています
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "😕", 
                title: "知識不足",
                text: "ChatGPTを触ったことのない社員が8割以上",
                color: "from-red-500 to-orange-500"
              },
              { 
                icon: "🤷", 
                title: "他人事意識",
                text: "「うちの業務には関係ない」という固定観念",
                color: "from-orange-500 to-yellow-500"
              },
              { 
                icon: "📝", 
                title: "実行力不足",
                text: "講演会には行くが、社内では何も動かない",
                color: "from-yellow-500 to-green-500"
              },
              { 
                icon: "💸", 
                title: "判断力不足",
                text: "技術を判断する力がなく、ベンダーに丸投げ",
                color: "from-green-500 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 card-shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ソリューション */}
      <section id="solution" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">SOLUTION</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">提供する支援内容</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              テンプレートではなく、個社ごとに最適化された支援プログラムを設計します
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "技術ブリーフィング",
                subtitle: "週次／月次",
                icon: <LightBulbIcon className="w-6 h-6" />,
                items: [
                  "海外の最新事例を経営層にも分かりやすく解説",
                  "概念で終わらず「明日何を試すか」を提示",
                  "業界特化の活用事例を厳選して紹介"
                ],
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                title: "社内ワークセッション",
                subtitle: "実践型研修",
                icon: <RocketLaunchIcon className="w-6 h-6" />,
                items: [
                  "業務に合わせたツール実演（Notion、ChatGPT、Zapier等）",
                  "IT担当者でなくても使える状態まで支援",
                  "社内に「使える人」を最低2人は育成"
                ],
                gradient: "from-purple-600 to-pink-600"
              },
              {
                title: "現場ドキュメント化",
                subtitle: "知識資産化",
                icon: <ShieldCheckIcon className="w-6 h-6" />,
                items: [
                  "属人化された業務を標準化・見える化",
                  "AIでナレッジベースを構築",
                  "「1社だけの業務OS」を設計"
                ],
                gradient: "from-green-600 to-teal-600"
              },
              {
                title: "ベンダー提案精査",
                subtitle: "セカンドオピニオン",
                icon: <CheckCircleIcon className="w-6 h-6" />,
                items: [
                  "高額システム提案の妥当性を技術的に検証",
                  "社内への説明代行で納得感を醸成",
                  "誤ったIT投資を未然に防止"
                ],
                gradient: "from-orange-600 to-red-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden card-shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`p-8 bg-gradient-to-br ${service.gradient} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">{service.title}</h4>
                      <p className="text-sm opacity-90 mt-1">{service.subtitle}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最低限の近代化スタック */}
      <section id="stack" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">TECHNOLOGY STACK</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">AI導入前の必須基盤</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AIを活用する前に、情報が流れ、共有され、再利用される環境を整備します
            </p>
          </motion.div>

          {/* メインカード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 card-shadow-lg mb-12"
          >
            <h4 className="text-2xl font-bold mb-8 text-center">推奨スタック（最小構成）</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Google Workspace",
                  desc: "メール、ドキュメント、会議の中核",
                  icon: "🔷",
                  color: "bg-blue-100 text-blue-700"
                },
                {
                  name: "Slack",
                  desc: "部署間コミュニケーション基盤",
                  icon: "💬",
                  color: "bg-purple-100 text-purple-700"
                },
                {
                  name: "Notion / Docs",
                  desc: "ナレッジベース・マニュアル集約",
                  icon: "📚",
                  color: "bg-green-100 text-green-700"
                },
                {
                  name: "GitHub",
                  desc: "IT部門のコード・文書管理",
                  icon: "⚡",
                  color: "bg-orange-100 text-orange-700"
                }
              ].map((tool, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-20 h-20 ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{tool.icon}</span>
                  </div>
                  <h5 className="font-bold text-lg mb-2">{tool.name}</h5>
                  <p className="text-sm text-gray-600">{tool.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-amber-50 rounded-xl">
              <p className="text-center text-gray-700 font-medium">
                💡 これらが揃って初めて「AIと人が一緒に働く環境」が成立します
              </p>
            </div>
          </motion.div>

          {/* OSS活用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mr-4">
                  <CheckCircleIcon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold">OSSで対応可能な業務</h4>
              </div>
              <div className="space-y-3">
                {[
                  "稟議書作成 → ChatGPT OSSでテンプレ化",
                  "FAQ・規程検索 → RAG構成で即時検索",
                  "社内勉強会 → GPT×Whisperで教材生成",
                  "IT部門支援 → Claude Code型で内製支援"
                ].map((item, i) => (
                  <div key={i} className="bg-white/70 rounded-lg p-4">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center mr-4">
                  <ShieldCheckIcon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold">商用API併用推奨</h4>
              </div>
              <div className="space-y-3">
                {[
                  "コンプライアンスチェック（KYC/AML）",
                  "契約書レビュー等の対外文書",
                  "顧客対応チャット・音声ログ活用",
                  "機密性の高い意思決定支援"
                ].map((item, i) => (
                  <div key={i} className="bg-white/70 rounded-lg p-4">
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 成果イメージ */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-green-600 uppercase tracking-wider">EXPECTED RESULTS</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">3ヶ月後の成果イメージ</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              段階的な導入により、確実に組織を変革します
            </p>
          </motion.div>

          <div className="relative">
            {/* タイムライン */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
            
            {[
              {
                month: "1ヶ月目",
                title: "基盤構築",
                items: ["ツール導入完了", "キーパーソン選定", "初期研修実施"],
                color: "from-blue-500 to-blue-600"
              },
              {
                month: "2ヶ月目",
                title: "実践開始",
                items: ["業務での活用開始", "成功事例の創出", "横展開の準備"],
                color: "from-purple-500 to-purple-600"
              },
              {
                month: "3ヶ月目",
                title: "定着化",
                items: ["部署横断での利用", "自走可能な体制", "ROI測定可能"],
                color: "from-green-500 to-green-600"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-8 card-shadow-lg">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white text-sm font-bold mb-4`}>
                      {phase.month}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-end">
                          <span className="text-gray-600">{item}</span>
                          <CheckCircleIcon className="w-5 h-5 text-green-500 ml-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金体系 */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">PRICING</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-6">シンプルな料金体系</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              成果にコミットする透明性の高い価格設定
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h4 className="text-xl font-bold mb-2">初回相談</h4>
              <div className="text-4xl font-bold mb-4">無料</div>
              <p className="text-blue-100">課題ヒアリング・提案</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border-2 border-white/40 transform scale-105"
            >
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">RECOMMENDED</div>
              <h4 className="text-xl font-bold mb-2">月次サポート</h4>
              <div className="text-4xl font-bold mb-4">15万円<span className="text-lg font-normal">/回</span></div>
              <p className="text-blue-100">標準的な支援プログラム</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h4 className="text-xl font-bold mb-2">PR協力プラン</h4>
              <div className="text-4xl font-bold mb-4">1万円<span className="text-lg font-normal">/回</span></div>
              <p className="text-blue-100">事例公開にご協力いただける場合</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center text-white"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              地域企業のDXを、共に実現しませんか？
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              筑邦銀行のネットワークとUPHASHの技術力で、地域経済に新たな価値を創造します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a 
                href="mailto:info@uphash.io"
                className="btn-primary !bg-white !text-gray-900 hover:!bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせはこちら
              </motion.a>
              <motion.button 
                className="px-8 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                資料をダウンロード
              </motion.button>
            </div>
            
            {/* 会社情報 */}
            <div className="border-t border-gray-700 pt-8">
              <h4 className="text-2xl font-bold mb-4">株式会社UPHASH</h4>
              <div className="space-y-2 text-gray-300">
                <p>代表取締役 今井翔太</p>
                <p>
                  <a href="mailto:info@uphash.io" className="hover:text-white transition-colors">
                    info@uphash.io
                  </a>
                </p>
                <p>
                  <a href="https://uphash.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    https://uphash.vercel.app/
                  </a>
                </p>
                <p className="text-sm pt-4 text-gray-400">
                  〒105-6415 東京都港区虎ノ門1-17-1 虎ノ門ヒルズビジネスタワー15F
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-100 py-8">
        <div className="container-custom text-center">
          <p className="text-sm text-gray-600">&copy; 2025 UPHASH Inc. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-2">この資料は関係者限定です。無断転載・配布はご遠慮ください。</p>
        </div>
      </footer>
    </div>
  )
}