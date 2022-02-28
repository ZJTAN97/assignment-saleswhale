import React from "react";
import styles from "./styles.module.scss";

export const BusinessCard = () => {
  const sampleData = {
    id: 1,
    name: "Axa",
    image:
      "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
    description:
      "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
    campaigns_count: 20,
    leads_count: 1500,
    is_favorited: true,
    is_archived: false,
    created_at: "28 July 2018",
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img className={styles.business__logo} src={sampleData.image} />
        <div>
          <div>{sampleData.name}</div>
          <div>Created {sampleData.created_at}</div>
        </div>
      </div>
      <div className={styles.description}>{sampleData.description}</div>
      <div className={styles.campaign__info}>
        <div>{sampleData.campaigns_count} Campaigns</div>
        <div>{sampleData.leads_count} Leads</div>
      </div>
    </div>
  );
};
