"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">筑邦銀行DX提案</h1>
            <nav className="space-x-8">
              <a href="#vision" className="text-gray-600 hover:text-gray-900">ビジョン</a>
              <a href="#solution" className="text-gray-600 hover:text-gray-900">ソリューション</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900">メリット</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            地域に根ざした<br />
            <span className="text-blue-600">デジタル革新</span>を実現
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            筑邦銀行様の持つ地域密着の強みを活かしながら、
            最新のデジタル技術で新たな価値を創造します
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            提案書をダウンロード
          </motion.button>
        </motion.div>
      </section>

      {/* ビジョンセクション */}
      <section id="vision" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">私たちのビジョン</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏦</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">地域金融の未来</h4>
                <p className="text-gray-600">地域経済の活性化を支援する新しい金融サービス</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">顧客体験の革新</h4>
                <p className="text-gray-600">モバイルファーストで便利なバンキング体験</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">信頼の継承</h4>
                <p className="text-gray-600">伝統的な信頼関係をデジタルで強化</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ソリューションセクション */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">提案ソリューション</h3>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">デジタルバンキングプラットフォーム</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>24時間365日利用可能なオンラインバンキング</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>AI搭載のパーソナライズド金融アドバイス</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>簡単で安全な本人確認システム</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>地域ビジネス支援のマッチングサービス</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">実装ロードマップ</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold">Phase 1 (3ヶ月)</p>
                      <p className="text-gray-600">基盤システムの構築</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="font-semibold">Phase 2 (6ヶ月)</p>
                      <p className="text-gray-600">顧客向けアプリケーション開発</p>
                    </div>
                    <div className="border-l-4 border-blue-300 pl-4">
                      <p className="font-semibold">Phase 3 (9ヶ月)</p>
                      <p className="text-gray-600">AIサービスの統合と最適化</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* メリットセクション */}
      <section id="benefits" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">期待される効果</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-4xl font-bold text-blue-600 mb-2">30%</p>
                <p className="text-gray-600">業務効率化</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-4xl font-bold text-blue-600 mb-2">50%</p>
                <p className="text-gray-600">顧客満足度向上</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-4xl font-bold text-blue-600 mb-2">2倍</p>
                <p className="text-gray-600">新規顧客獲得</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-4xl font-bold text-blue-600 mb-2">40%</p>
                <p className="text-gray-600">コスト削減</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">ご興味をお持ちいただけましたか？</h3>
          <p className="text-xl mb-8">詳細な提案内容についてご説明させていただきます</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            お問い合わせはこちら
          </motion.button>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 筑邦銀行DX提案. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}