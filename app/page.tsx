"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-900">提案書</h1>
              <p className="text-sm text-gray-500">筑邦銀行 × UPHASH Inc.</p>
            </div>
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              限定公開・パスワード保護
            </div>
          </div>
        </div>
      </header>

      {/* メインタイトル */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            「理解できない・動けない」日本企業を、<br />
            <span className="text-blue-600">技術で変える</span>外部伴走支援構想
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            生成AIや技術革新に関心はあるが、実際には何も始まっていない企業の現実を打破する
          </p>
        </motion.div>
      </section>

      {/* 現状の課題 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">日本企業の現実</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { emoji: "😕", text: "ChatGPTを触ったことのない社員が8割以上" },
                { emoji: "🤷", text: "「AIの活用は？」と聞くと「うちの業務には関係ない」と返される" },
                { emoji: "📝", text: "講演会には行くが、社内では何も動かない" },
                { emoji: "💸", text: "技術を判断する力がなく、ベンダーに丸投げ" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md flex items-start space-x-4"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="text-gray-700 flex-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 支援構想の本質 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">この支援構想の本質</h3>
            <div className="bg-blue-50 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">法人化は行わず、必要な企業にのみ提案書形式で提供</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">筑邦銀行のネットワークと信頼を活かし、実質的な「技術チューター」として介入</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">使うツールは生成AIだけに限らず、<strong>業務改善・業務設計全体</strong>を含む</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">相手のやる気の有無に関わらず、「使わせる」「理解させる」教育メソッドを実装</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 課題タイプ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">想定する企業の課題タイプ</h3>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                "DX担当が紙資料で会議している",
                "新しいツールを導入しても、初期設定のまま放置されている",
                "ITリテラシーの高い社員が、社内で浮いて孤立している",
                "技術者がいないため、何が妥当な選定か判断できない",
                "研修をやっても、その後「何も変わっていない」"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-400"
                >
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 支援内容 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-4">提供する支援内容</h3>
            <p className="text-center text-gray-600 mb-12">テンプレートではなく、個社ごとに設計</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. 技術ブリーフィング（週次／月次）",
                  items: [
                    "海外の生成AI・自動化・業務設計・ツール活用の最新事例を解説",
                    "経営陣にも現場にも伝わる『翻訳力』重視",
                    "概念で終わらず、「明日何を試すか」をその場で示す"
                  ]
                },
                {
                  title: "2. 社内向けワークセッション",
                  items: [
                    "その会社の業務に合わせたツール実演（例：Notion、Whisper、ChatGPT、Zapier、SaaS連携など）",
                    "IT担当者でなくても使える状態にまで支援",
                    "社内に「使える人」を最低2人は残す"
                  ]
                },
                {
                  title: "3. 現場ドキュメント化支援",
                  items: [
                    "口頭・属人化された業務を、誰でもわかる手順に変換",
                    "現場の『暗黙知』をAIでドキュメント化し、ナレッジ資産へ変換",
                    "各種SaaSや社内ルールを統合した「1社だけの業務OS」設計"
                  ]
                },
                {
                  title: "4. ベンダー提案のセカンドオピニオン",
                  items: [
                    "「その提案、本当に妥当ですか？」を技術的に精査",
                    "高額なシステム提案の仕様をかみ砕いて社内へ説明代行",
                    "誤ったIT投資の抑止と、社内の納得感の醸成を両立"
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 cursor-pointer"
                    onClick={() => setExpandedSection(expandedSection === service.title ? null : service.title)}
                  >
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedSection === service.title ? "auto" : "0px" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* サポート方針 */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">サポート方針</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "無理に褒めない／ゴマをすらない",
                "「わからない」と言わせる設計で思考停止を破壊",
                "技術の導入だけでなく、「社内で回る状態」まで責任を持つ",
                "属人的な『情シス頼り』文化から脱却する仕組みを一緒に設計"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <p className="text-gray-100">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 成果イメージ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">成果のイメージ（3か月）</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "社内に「技術を理解して話せる層」が現れる",
                  "自社業務に特化したプロンプトや業務フローが残る",
                  "部署横断でAIが使われはじめる",
                  "経営層が、技術者と建設的な会話ができるようになる"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI導入前の必要スタック */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-4">AI導入以前に必要な「最低限の近代化スタック」</h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              AIを使えるようにする前に、<br />
              社内に「情報が流れ、共有され、再利用される」環境を整える必要があります。
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-6 text-orange-600">推奨スタック（最小構成）</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h5 className="font-semibold text-gray-900">Google Workspace</h5>
                    <p className="text-sm text-gray-600">メール、ドキュメント、会議、クラウド管理の中核</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h5 className="font-semibold text-gray-900">Slack</h5>
                    <p className="text-sm text-gray-600">部署間コミュニケーション、AIアシスタント導入の母体</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h5 className="font-semibold text-gray-900">Notion or Docs</h5>
                    <p className="text-sm text-gray-600">ナレッジベース、業務マニュアルの集約場所</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h5 className="font-semibold text-gray-900">GitHub（社内開発用途）</h5>
                    <p className="text-sm text-gray-600">IT部門のコード・ドキュメント管理</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic">
                    これらが揃って初めて、「AIと人が一緒に働く環境」が成立します。
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-6 text-blue-600">地銀IT部門に向けた導入支援</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Google Workspaceの構成設計と導入</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Slack導入と社内Bot連携設計</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Notionによるマニュアル再構成＋RAG連携</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">すべて閉域・限定アクセス構成も対応可能</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800">
                    セキュリティ要件に合わせた柔軟な構成が可能です
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OSSで業務効率化 */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-4">OSSで業務効率化は可能か？</h3>
            <p className="text-xl text-center mb-2 text-gray-700">地銀業務とのマッチング整理</p>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              業務全体の約80％は、OSSベースで十分対応できます。<br />
              以下のような分類で、費用を抑えつつ実用的なAI活用が可能です。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* OSSのみで十分な業務 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold ml-4 text-green-700">OSSのみで十分な業務例</h4>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900">稟議書作成</p>
                    <p className="text-sm text-gray-600">→ ChatGPT OSSでテンプレ化・自動補完</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900">FAQ・規程検索</p>
                    <p className="text-sm text-gray-600">→ RAG構成で社内文書を即時検索</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900">社内勉強会</p>
                    <p className="text-sm text-gray-600">→ OSS GPT×Whisperで教材を自動生成</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-gray-900">IT部門支援</p>
                    <p className="text-sm text-gray-600">→ Claude Code型 OSSツールで内製開発支援</p>
                  </div>
                </div>
              </motion.div>

              {/* 商用併用を視野に入れる業務 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold ml-4 text-purple-700">商用の併用も視野に入れるべき業務</h4>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="font-semibold text-gray-900">コンプライアンスチェック（KYC／AML）</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="font-semibold text-gray-900">契約書レビューなど対外的な生成物</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="font-semibold text-gray-900">顧客対応チャット・音声通話ログの活用</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    「地銀が責任を持つべき領域」には、精度と保証が伴うAPIの活用も必要です。
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 結論 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center"
            >
              <p className="text-xl font-bold">
                結論：OSS中心 × 選択的API併用が、最も合理的かつ持続可能な構成です。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 導入形式 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">導入形式と情報管理</h3>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">🔒</span>
                  <span className="text-gray-700">この提案は<strong>Webページ（パスワード保護）で限定公開</strong>します</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">🎯</span>
                  <span className="text-gray-700">紹介先企業ごとに内容をカスタマイズし、1社1URLで提供可能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">📄</span>
                  <span className="text-gray-700">PDFなどでの汎用配布は想定していません</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 次のステップ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">次のステップ</h3>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">実施内容</h4>
                  <ul className="space-y-2">
                    <li>• 貴行のお取引先で該当する企業へ個別にご紹介</li>
                    <li>• 週次 or 月次のオンラインセッション＋社内チャンネル支援</li>
                    <li>• 初回のヒアリング・説明会は無料対応可能</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">料金体系</h4>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-2xl font-bold mb-2">15万円／回</p>
                    <p className="text-sm">PR協力がある場合は1万円</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-8">お問い合わせ</h3>
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold mb-4">株式会社UPHASH</h4>
              <div className="space-y-2 text-gray-300">
                <p>代表取締役 今井翔太</p>
                <p>
                  <a href="mailto:info@uphash.io" className="hover:text-blue-400 transition-colors">
                    info@uphash.io
                  </a>
                </p>
                <p>
                  <a href="https://uphash.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    https://uphash.vercel.app/
                  </a>
                </p>
                <p className="text-sm pt-4">
                  〒105-6415<br />
                  東京都港区虎ノ門1-17-1<br />
                  虎ノ門ヒルズビジネスタワー15F
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; 2025 UPHASH Inc. All rights reserved.</p>
          <p className="text-xs mt-2">この資料は関係者限定です。無断転載・配布はご遠慮ください。</p>
        </div>
      </footer>
    </div>
  )
}