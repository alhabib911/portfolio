-- Editable Hero and About content
alter table about add column if not exists hero_title text default 'Full Stack';
alter table about add column if not exists hero_role text default 'Web Developer';
alter table about add column if not exists hero_subtitle text default 'Building Scalable SaaS, ERP & eCommerce Applications';
alter table about add column if not exists hero_availability text default 'Available for Freelance & Remote Opportunities';
alter table about add column if not exists hero_tech_stack text[] default '{React,Next.js,Redux,Node.js,Express,MongoDB,PostgreSQL,AI Integration}';
alter table about add column if not exists about_heading text default 'I design and build products that balance performance and user experience.';
alter table about add column if not exists about_card_one_title text default 'Product-first thinking';
alter table about add column if not exists about_card_one_text text default 'I translate business needs into clear, usable interfaces and workflows that are easy to extend.';
alter table about add column if not exists about_card_two_title text default 'Clean engineering';
alter table about add column if not exists about_card_two_text text default 'I build structured, maintainable code with reusable patterns and scalable application architecture.';
alter table about add column if not exists about_card_three_title text default 'Business impact';
alter table about add column if not exists about_card_three_text text default 'The aim is always practical value: speed, clarity, conversion, and long-term maintainability.';
