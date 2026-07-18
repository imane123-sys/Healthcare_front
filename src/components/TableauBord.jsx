import React from "react";
import "../css/TableauBord.css";

export default function TableauBord() {
  return (
    <div className="dashboard-root"> b 
      <div className="dashboard-bg" />

      {/* ---------- Sidebar ---------- */}
      <div className="sidebar">
        <div className="sidebar-spacer" />
        <nav className="sidebar-nav">
          <button className="nav-item">
            <div className="nav-icon" style={{ width: 16, height: 18 }} />
            <span className="nav-label">Accueil</span>
          </button>

          <button className="nav-item nav-item--active">
            <div className="nav-icon" style={{ width: 18, height: 18 }} />
            <span className="nav-label">Tableau de bord</span>
          </button>

          <button className="nav-item">
            <div className="nav-icon" style={{ width: 16, height: 16 }} />
            <span className="nav-label">Patients</span>
          </button>

          <button className="nav-item">
            <div className="nav-icon" style={{ width: 20, height: 20 }} />
            <span className="nav-label">Médecins</span>
          </button>

          <button className="nav-item">
            <div className="nav-icon" style={{ width: 18, height: 20 }} />
            <span className="nav-label">Rendez-vous</span>
          </button>

          <button className="nav-item">
            <div className="nav-icon" style={{ width: 20, height: 16 }} />
            <span className="nav-label">Dossiers médicaux</span>
          </button>
        </nav>
      </div>

      {/* ---------- Search + Add patient ---------- */}
      <div className="search-bar" />

      <button className="btn-add-patient">
        <div className="btn-add-patient-shadow" />
        <div className="btn-add-patient-icon" />
        <div className="btn-add-patient-label">Ajouter Patient</div>
      </button>

      {/* ---------- Stat cards ---------- */}
      <div className="stats-row">
        {/* Carte 1 : Total Patients */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-badge" style={{ background: "#DBE1FF" }}>
              <div
                className="stat-icon"
                style={{ width: 24, height: 12, background: "#004AC6" }}
              />
            </div>
            <div className="stat-trend">
              <div className="stat-trend-value">+12%</div>
              <div className="stat-trend-icon" />
            </div>
          </div>
          <div className="stat-label-wrap">
            <div className="stat-label">Total Patients</div>
          </div>
          <div className="stat-value-wrap">
            <div className="stat-value">1,284</div>
          </div>
        </div>

        {/* Carte 2 : Médecins actifs */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-badge" style={{ background: "#D3E4FE" }}>
              <div
                className="stat-icon"
                style={{ width: 20, height: 20, background: "#505F76" }}
              />
            </div>
            <div className="stat-badge-text" style={{ color: "#434655" }}>
              Actif
            </div>
          </div>
          <div className="stat-label-wrap">
            <div className="stat-label">Médecins actifs</div>
          </div>
          <div className="stat-value-wrap">
            <div className="stat-value">42</div>
          </div>
        </div>

        {/* Carte 3 : Rendez-vous aujourd'hui */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-badge" style={{ background: "#FFDBCD" }}>
              <div
                className="stat-icon"
                style={{ width: 18, height: 20, background: "#943700" }}
              />
            </div>
            <div className="stat-badge-text" style={{ color: "#BA1A1A" }}>
              82% plein
            </div>
          </div>
          <div className="stat-label-wrap">
            <div className="stat-label">Rendez-vous aujourd&apos;hui</div>
          </div>
          <div className="stat-value-wrap">
            <div className="stat-value">18</div>
          </div>
        </div>

        {/* Carte 4 : Dossiers médicaux total */}
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-badge" style={{ background: "#E1E2ED" }}>
              <div
                className="stat-icon"
                style={{ width: 16, height: 20, background: "#434655" }}
              />
            </div>
            <div className="stat-badge-text" style={{ color: "#737686" }}>
              Dernière MAJ: 2m
            </div>
          </div>
          <div className="stat-label-wrap">
            <div className="stat-label">Dossiers médicaux total</div>
          </div>
          <div className="stat-value-wrap">
            <div className="stat-value">4,892</div>
          </div>
        </div>
      </div>

      {/* ---------- Appointments overview chart ---------- */}
      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-title-group">
            <div className="chart-title">Aperçu des Rendez-vous</div>
            <div className="chart-subtitle">
              Flux mensuel des patients par service
            </div>
          </div>

          <button className="chart-filter">
            <div className="chart-filter-icon-wrap">
              <div className="chart-filter-icon">
                <div className="chart-filter-icon-shape" />
              </div>
            </div>
            <div className="chart-filter-label">Derniers 6 mois</div>
          </button>
        </div>

        <div className="chart-months-row">
          <div className="chart-month">
            <div className="chart-month-label">Jan</div>
          </div>
          <div className="chart-month">
            <div className="chart-month-label">Fév</div>
          </div>
          <div className="chart-month">
            <div className="chart-month-label">Mar</div>
          </div>
          <div className="chart-month">
            <div className="chart-month-label">Avr</div>
          </div>
          <div className="chart-month">
            <div className="chart-month-label">Mai</div>
          </div>
          <div className="chart-month">
            <div className="chart-month-label chart-month-label--active">
              Juin
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Calendar ---------- */}
      <div className="calendar-card">
        <div className="calendar-blur-circle" />

        <div className="calendar-header">
          <div className="calendar-title">Calendrier</div>
          <button className="calendar-more-btn">
            <div className="calendar-more-icon" />
          </button>
        </div>

        <div className="calendar-grid">
          <div className="calendar-day-label">L</div>
          <div className="calendar-day-label">M</div>
          <div className="calendar-day-label">M</div>
          <div className="calendar-day-label">J</div>
          <div className="calendar-day-label">V</div>
          <div className="calendar-day-label">S</div>
          <div className="calendar-day-label">D</div>

          <div className="calendar-date">1</div>
          <div className="calendar-date">2</div>
          <div className="calendar-date">3</div>
          <div className="calendar-date calendar-date--active">4</div>
          <div className="calendar-date">5</div>
          <div className="calendar-date">6</div>
          <div className="calendar-date">7</div>

          <div className="calendar-date">8</div>
          <div className="calendar-date">9</div>
          <div className="calendar-date">10</div>
          <div className="calendar-date">11</div>
          <div className="calendar-date">12</div>
          <div className="calendar-date">13</div>
          <div className="calendar-date">14</div>

          <div className="calendar-date">15</div>
          <div className="calendar-date">16</div>
          <div className="calendar-date">
            <div className="calendar-date--icon" />
          </div>
          <div className="calendar-date">18</div>
          <div className="calendar-date">19</div>
          <div className="calendar-date">20</div>
          <div className="calendar-date">21</div>
        </div>

        <div className="calendar-next-appt">
          <div className="calendar-next-appt-label">Prochain RDV :</div>
          <div className="calendar-next-appt-value">
            14:30 - Jean-Luc Picard
          </div>
        </div>
      </div>

      {/* ---------- Latest patients table ---------- */}
      <div className="patients-card">
        <div className="card-header-row">
          <div className="card-title">Derniers patients ajoutés</div>
          <button className="card-link">Voir tout</button>
        </div>

        <div className="patients-table">
          <div className="table-head-row">
            <div className="table-head-cell table-head-cell--name">
              <div className="table-head-label">NOM / PRÉNOM</div>
            </div>
            <div className="table-head-cell table-head-cell--date">
              <div className="table-head-label">DATE D&apos;AJOUT</div>
            </div>
            <div className="table-head-cell table-head-cell--status">
              <div className="table-head-label">STATUS</div>
            </div>
            <div className="table-head-cell table-head-cell--actions">
              <div className="table-head-label">ACTIONS</div>
            </div>
          </div>

          <div className="table-body">
            {/* Ligne 1 : Marie Dupont */}
            <div className="table-row">
              <div className="table-cell-name">
                <div className="avatar" style={{ background: "#D3E4FE" }}>
                  <div className="avatar-initials" style={{ color: "#0B1C30" }}>
                    MD
                  </div>
                </div>
                <div className="patient-name">Marie Dupont</div>
              </div>
              <div className="table-cell-date">
                <div className="date-text">Aujourd&apos;hui, 09:12</div>
              </div>
              <div className="table-cell-status">
                <div className="status-badge" style={{ background: "#DCFCE7" }}>
                  <div className="status-badge-text" style={{ color: "#166534" }}>
                    VÉRIFIÉ
                  </div>
                </div>
              </div>
              <div className="table-cell-actions">
                <button className="actions-btn">
                  <div className="actions-icon" />
                </button>
              </div>
            </div>

            {/* Ligne 2 : Pierre Laurent */}
            <div className="table-row">
              <div className="table-cell-name">
                <div className="avatar" style={{ background: "#FFDBCD" }}>
                  <div className="avatar-initials" style={{ color: "#360F00" }}>
                    PL
                  </div>
                </div>
                <div className="patient-name">Pierre Laurent</div>
              </div>
              <div className="table-cell-date">
                <div className="date-text">Hier, 16:45</div>
              </div>
              <div className="table-cell-status">
                <div className="status-badge" style={{ background: "#FEF9C3" }}>
                  <div className="status-badge-text" style={{ color: "#854D0E" }}>
                    EN ATTENTE
                  </div>
                </div>
              </div>
              <div className="table-cell-actions">
                <button className="actions-btn">
                  <div className="actions-icon" />
                </button>
              </div>
            </div>

            {/* Ligne 3 : Sophie Martin (dernière ligne, pas de bordure) */}
            <div className="table-row table-row--last">
              <div className="table-cell-name">
                <div className="avatar" style={{ background: "#DBE1FF" }}>
                  <div className="avatar-initials" style={{ color: "#00174B" }}>
                    SM
                  </div>
                </div>
                <div className="patient-name">Sophie Martin</div>
              </div>
              <div className="table-cell-date">
                <div className="date-text">12 Juin, 14:20</div>
              </div>
              <div className="table-cell-status">
                <div className="status-badge" style={{ background: "#DCFCE7" }}>
                  <div className="status-badge-text" style={{ color: "#166534" }}>
                    VÉRIFIÉ
                  </div>
                </div>
              </div>
              <div className="table-cell-actions">
                <button className="actions-btn">
                  <div className="actions-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Recent appointments ---------- */}
      <div className="appointments-card">
        <div className="appointments-title-wrap">
          <div className="appointments-title">Derniers rendez-vous</div>
        </div>

        <div className="appointments-list">
          {/* Rendez-vous 1 */}
          <div className="appointment-item">
            <div className="appointment-date-box">
              <div className="appointment-month">JUIN</div>
              <div className="appointment-day">18</div>
            </div>
            <div className="appointment-info">
              <div className="appointment-type">Consultation Générale</div>
              <div className="appointment-meta">Marc Durand • 10:00</div>
            </div>
            <div className="appointment-status-icon--check" />
          </div>

          {/* Rendez-vous 2 */}
          <div className="appointment-item">
            <div className="appointment-date-box">
              <div className="appointment-month">JUIN</div>
              <div className="appointment-day">18</div>
            </div>
            <div className="appointment-info">
              <div className="appointment-type">Échographie</div>
              <div className="appointment-meta">Alice Vasseur • 11:30</div>
            </div>
            <div className="appointment-status-icon--urgent" />
          </div>

          {/* Rendez-vous 3 (dernier, pas de bordure) */}
          <div className="appointment-item appointment-item--last">
            <div className="appointment-date-box">
              <div className="appointment-month">JUIN</div>
              <div className="appointment-day">18</div>
            </div>
            <div className="appointment-info">
              <div className="appointment-type">Suivi Post-Op</div>
              <div className="appointment-meta">Robert King • 14:00</div>
            </div>
            <div className="appointment-status-icon--muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
