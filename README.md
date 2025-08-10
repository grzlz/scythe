# Scythe - Merit-Based Work Economy Platform

A digital wallet application with integrated marketplace and self-governance, designed for educational institutions teaching software development. Scythe creates a work-based economy where students learn, earn, and participate in democratic decision-making.

## What is Scythe?

Scythe is an **educational economic platform** that combines learning, working, and governing in a single ecosystem:

- **💰 Digital Wallet** - Manage and transfer Scythes (work-based currency)
- **🛒 Productivity Market** - Trade productive force and currency itself  
- **🏛️ Self-Governance** - Vote on platform rules, features, and policies
- **🎓 Guild System** - Skill progression from Apprentice → Journeyman → Master

## How It Works

### The Currency: Scythes
**Scythes function like story points in Scrum** - they represent work units, not speculative value.

- **Initial Distribution:** Giveaways for early users
- **Ongoing Supply:** Minted through completed development work
- **Value:** Determined by actual productivity, not speculation

### Guild-Based Skill System
Students progress through verified skill levels:

- **Apprentice** - Learning phase, no market access
- **Journeyman** - Can take jobs, pays premium (3 Scythes = 1 story point)
- **Master** - Efficient rates (1 Scythe = 1 story point)

**Up or Out Structure:** Consistent performance required to maintain guild level.

### The Market
Trade two primary assets:

1. **Productive Force** - Actual development work (tickets, features, bugs)
2. **Scythes Themselves** - Currency trading based on productivity demand

*Future:* Physical merchandise purchasable with Scythes

### Governance System
Complete self-governance through democratic voting:

- **Anyone can propose changes** to platform rules, features, or policies
- **Time-limited voting** with proportional thresholds based on user base
- **Vote weight varies** by proposal type and community size
- **All ecosystem rules** are codified and changeable through governance

## Work Verification & Anti-Gaming

**Verification Chain:** Ticket Creation → Code Commit → Peer Review → Product Owner Acceptance → Scythe Mint

**Gaming Prevention:**
- Guild ranks controlled by educational institution
- Performance tracking with demotion/removal for underperformance  
- Mentorship stakes - Masters lose Scythes for poor student outcomes
- Economic velocity limits prevent individual market manipulation

## Technical Architecture

**Frontend:** SvelteKit 2 + Svelte 5 (runes) + TailwindCSS
**Backend:** Supabase (PostgreSQL + Auth + Real-time)
**UI:** Glass/liquid aesthetic design system
**State:** Svelte 5 runes with reactive global state

### Application Structure
```
src/
├── routes/
│   ├── +page.svelte            # Main SPA (module switching)
│   ├── about/+page.svelte      # Platform information
│   └── auth/                   # Authentication flow
├── lib/
│   ├── modules/                # Core application modules
│   │   ├── Dashboard.svelte    # Overview & statistics
│   │   ├── Wallet.svelte       # Scythe management
│   │   ├── Market.svelte       # Productivity trading
│   │   └── Governance.svelte   # Voting & proposals
│   ├── state/                  # Global reactive state (.svelte.js)
│   ├── services/               # API abstraction layer
│   └── components/             # Reusable UI components
```

### Data Flow Architecture
- **Components** interact with reactive state
- **State managers** call service layer for data operations
- **Services** handle all database/API communication
- **Database functions** contain business logic and rules

## Development

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
npm run preview
```

## Vision

Scythe demonstrates that **merit-based economies** can function at scale while maintaining democratic governance. By tying currency to actual productive work and skill progression, we create sustainable economic incentives aligned with real value creation.

The platform serves as both an educational tool and a working economic model - students learn software development while participating in a functioning work-based economy with real consequences and rewards.
