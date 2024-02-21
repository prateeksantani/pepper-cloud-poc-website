import * as React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
    <section className="main-page">
      <div>
    <h3>CRM with WhatsApp and Facebook integration</h3>
    <h1>All-in-one sales CRM  built just for your sales  team</h1>
    <br></br>
    <p>Grow your sales with Singapore's best all-in-one CRM system, built for small and medium businesses. Connect WhatsApp, Facebook Messenger, Instagram, Telegram, and other messaging channels with the CRM platform and close deals faster!</p>
    <br></br>
    <p>Get Pepper Cloud CRM with up to 50% PSG grant support.</p>
    <button class="btn">Get Started</button>
    </div>
    <div>
    <img src="/index-cover.png" alt="cover"></img>
    </div>
    </section>
    </Layout>
  )
}
