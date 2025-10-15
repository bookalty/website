"use client";
import { useState } from "react";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  highlight?: boolean;
  features: string[];
  cta: string;
  link: string;
};

const plans: Plan[] = [
  {
    name: "Open Source",
    monthly: 0,
    yearly: 0,
    highlight: false,
    features: [
      "Hébergement libre (self-hosted)",
      "Accès complet au code source",
      "Mises à jour communautaires",
      "Aucune limite d’utilisateurs",
      "Support via GitHub et Discord",
    ],
    cta: "Voir sur GitHub",
    link: "https://github.com/bookalty"
  },
  {
    name: "Pro",
    monthly: 99,
    yearly: 1099,
    highlight: true,
    features: [
      "1 établissements", 
      "Accès à toutes les fonctionnalités",
      "Mises à jour régulières",
      "Aucune limite d’utilisateurs",
      "Support prioritaire"
    ],
    cta: "Essayer Pro",
    link: ""
  },
  {
    name: "Business",
    monthly: 199,
    yearly: 2199,
    features: [
      "Jusqu'à 10 établissement", 
      "Accès à toutes les fonctionnalités",
      "Aucune limite d’utilisateurs",
      "Support dédié",
      "Formation et onboarding"
    ],
    cta: "Essayer Business",
    link: ""
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className=" min-h-screen overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-20 mt-10">
        {/* Header + Toggle */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Abonnements</h2>
          <p className="mt-3 text-highlight">Choisissez un plan adapté.</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground/10 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm ${
                !yearly ? "bg-foreground text-background" : "text-foreground"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm ${
                yearly ? "bg-foreground text-background" : "text-foreground"
              }`}
            >
              Annuel <span className="ml-1 text-xs opacity-75">(-~2 mois)</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`rounded-2xl border border-accent/40 p-15 flex flex-col ${
                  p.highlight
                    ? "bg-foreground/5 shadow-[0_0_40px_highlight] ring-2 ring-primary/40"
                    : "bg-foreground/0"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{p.name}</h3>
                  {p.highlight && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary text-background">
                      Recommandé
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  {price === 0 ? (
                    <p className="text-4xl font-bold text-foreground">Gratuit</p>
                  ) : (
                    <p className="text-4xl font-bold text-foreground">
                      {price}
                      <span className="text-lg align-super">€</span>
                      <span className="text-sm text-highlight ml-2">
                        /{yearly ? "an" : "mois"}
                      </span>
                    </p>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-foreground/90">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                 <div className="mt-auto relative group">
                  <button
                    onClick={() => {
                      if (p.link) window.open(p.link, "_blank");
                    }}
                    disabled={!p.link}
                    className={`w-full rounded-full px-4 py-3 font-medium transition border border-accent
                      ${p.link
                        ? "bg-background text-foreground hover:bg-foreground/10"
                        : "bg-foreground/5 text-highlight cursor-not-allowed"
                      }`}
                  >
                    {p.cta}
                  </button>                    
                  {!p.link && (
                    <span className="absolute left-1/2 -translate-x-1/2 -top-10 bg-foreground text-background text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      L'application n'est pas encore disponible.
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-sm text-highlight">
          Prix indicatifs. TVA en sus selon région.
        </p>
      </div>
    </section>
  );
}
