-- =====================================================================
--  SKEMA BASIS DATA — Website Company Profile
--  PT. Kreasindo Graha Persada (KGP)
--  Desain ulang profesional + Chatbot AI (FAQ → Gemini)
--  Engine: MySQL 8 / InnoDB | Charset: utf8mb4_unicode_ci
--  Konvensi Laravel: tabel jamak, PK `id`, FK `xxx_id`, timestamps.
--  Catatan: kolom created_at/updated_at ada di semua tabel; deleted_at
--           hanya pada tabel ber-soft-delete.
-- =====================================================================

SET FOREIGN_KEY_CHECKS = 0;
SET NAMES utf8mb4;

-- =====================================================================
--  A. AUTENTIKASI
-- =====================================================================

-- 1. users — admin / editor / penulis berita
CREATE TABLE `users` (
  `id`                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`              VARCHAR(100)  NOT NULL,
  `email`             VARCHAR(150)  NOT NULL,
  `email_verified_at` TIMESTAMP     NULL DEFAULT NULL,
  `password`          VARCHAR(255)  NOT NULL,
  `role`              ENUM('superadmin','admin','editor') NOT NULL DEFAULT 'editor',
  `avatar`            VARCHAR(255)  NULL,
  `is_active`         TINYINT(1)    NOT NULL DEFAULT 1,
  `last_login_at`     TIMESTAMP     NULL DEFAULT NULL,
  `remember_token`    VARCHAR(100)  NULL DEFAULT NULL,
  `created_at`        TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`        TIMESTAMP     NULL DEFAULT NULL,
  `deleted_at`        TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  B. PROFIL & PORTOFOLIO
-- =====================================================================

-- 2. services — layanan perusahaan (IT / Interior / ME)
CREATE TABLE `services` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `division`    ENUM('it','interior','me') NOT NULL,
  `title`       VARCHAR(150)  NOT NULL,
  `slug`        VARCHAR(170)  NOT NULL,
  `excerpt`     VARCHAR(300)  NULL,
  `description` LONGTEXT      NULL,
  `icon`        VARCHAR(255)  NULL,
  `cover_image` VARCHAR(255)  NULL,
  `is_active`   TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_services_slug` (`slug`),
  KEY `ix_services_division` (`division`),
  KEY `ix_services_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. clients — master klien (dipakai portofolio & section "Klien Kami")
CREATE TABLE `clients` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(150)  NOT NULL,
  `slug`        VARCHAR(170)  NOT NULL,
  `category`    ENUM('militer','pemerintah','bumn','swasta') NOT NULL,
  `logo`        VARCHAR(255)  NULL,
  `website`     VARCHAR(255)  NULL,
  `is_active`   TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_clients_slug` (`slug`),
  KEY `ix_clients_category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. projects — portofolio proyek (37+)
--    FK: client_id → clients | service_id → services (keduanya nullable)
CREATE TABLE `projects` (
  `id`              BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id`       BIGINT UNSIGNED NULL,
  `service_id`      BIGINT UNSIGNED NULL,
  `division`        ENUM('it','interior','sipil') NOT NULL,
  `title`           VARCHAR(200)  NOT NULL,
  `slug`            VARCHAR(220)  NOT NULL,
  `description`     LONGTEXT      NULL,
  `contract_value`  BIGINT UNSIGNED NULL,
  `location`        VARCHAR(150)  NULL,
  `year`            YEAR          NULL,
  `completed_at`    DATE          NULL,
  `is_featured`     TINYINT(1)    NOT NULL DEFAULT 0,
  `is_active`       TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`      INT           NOT NULL DEFAULT 0,
  `created_at`      TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`      TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_projects_slug` (`slug`),
  KEY `ix_projects_client` (`client_id`),
  KEY `ix_projects_service` (`service_id`),
  KEY `ix_projects_division` (`division`),
  KEY `ix_projects_featured` (`is_featured`),
  CONSTRAINT `fk_projects_client`  FOREIGN KEY (`client_id`)  REFERENCES `clients`  (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_projects_service` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. project_images — foto proyek (1:N) → normalisasi, ganti kolom JSON
CREATE TABLE `project_images` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id`  BIGINT UNSIGNED NOT NULL,
  `file_path`   VARCHAR(255)  NOT NULL,
  `caption`     VARCHAR(255)  NULL,
  `is_cover`    TINYINT(1)    NOT NULL DEFAULT 0,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_project_images_project` (`project_id`),
  CONSTRAINT `fk_project_images_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  C. GALERI DOKUMENTASI
-- =====================================================================

-- 6. galleries — album foto
CREATE TABLE `galleries` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(150)  NOT NULL,
  `slug`        VARCHAR(170)  NOT NULL,
  `division`    ENUM('it','interior','sipil','event') NOT NULL,
  `description` TEXT          NULL,
  `cover_image` VARCHAR(255)  NULL,
  `is_active`   TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_galleries_slug` (`slug`),
  KEY `ix_galleries_division` (`division`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. gallery_photos — foto dalam album (1:N)
CREATE TABLE `gallery_photos` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `gallery_id`  BIGINT UNSIGNED NOT NULL,
  `file_path`   VARCHAR(255)  NOT NULL,
  `caption`     VARCHAR(255)  NULL,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_gallery_photos_gallery` (`gallery_id`),
  CONSTRAINT `fk_gallery_photos_gallery` FOREIGN KEY (`gallery_id`) REFERENCES `galleries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  D. BERITA / ARTIKEL (CMS)
-- =====================================================================

-- 8. post_categories — kategori berita
CREATE TABLE `post_categories` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(100)  NOT NULL,
  `slug`        VARCHAR(120)  NOT NULL,
  `description` VARCHAR(255)  NULL,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_post_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. posts — berita & artikel
--    FK: post_category_id → post_categories | user_id → users (penulis)
CREATE TABLE `posts` (
  `id`                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_category_id`  BIGINT UNSIGNED NULL,
  `user_id`           BIGINT UNSIGNED NULL,
  `title`             VARCHAR(200)  NOT NULL,
  `slug`              VARCHAR(220)  NOT NULL,
  `excerpt`           VARCHAR(500)  NULL,
  `content`           LONGTEXT      NULL,
  `thumbnail`         VARCHAR(255)  NULL,
  `status`            ENUM('draft','published','archived') NOT NULL DEFAULT 'draft',
  `published_at`      TIMESTAMP     NULL DEFAULT NULL,
  `views_count`       INT UNSIGNED  NOT NULL DEFAULT 0,
  `created_at`        TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`        TIMESTAMP     NULL DEFAULT NULL,
  `deleted_at`        TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_posts_slug` (`slug`),
  KEY `ix_posts_category` (`post_category_id`),
  KEY `ix_posts_author` (`user_id`),
  KEY `ix_posts_status` (`status`),
  CONSTRAINT `fk_posts_category` FOREIGN KEY (`post_category_id`) REFERENCES `post_categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_posts_author`   FOREIGN KEY (`user_id`)          REFERENCES `users`           (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. tags — label artikel
CREATE TABLE `tags` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(80)   NOT NULL,
  `slug`        VARCHAR(100)  NOT NULL,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_tags_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. post_tag — pivot many-to-many (posts ↔ tags)
CREATE TABLE `post_tag` (
  `post_id`  BIGINT UNSIGNED NOT NULL,
  `tag_id`   BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`post_id`,`tag_id`),
  KEY `ix_post_tag_tag` (`tag_id`),
  CONSTRAINT `fk_post_tag_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_post_tag_tag`  FOREIGN KEY (`tag_id`)  REFERENCES `tags`  (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  E. DOKUMEN LEGAL
-- =====================================================================

-- 12. document_categories — kategori dokumen (SBU, Perizinan, Legalitas, Laporan)
CREATE TABLE `document_categories` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(100)  NOT NULL,
  `slug`        VARCHAR(120)  NOT NULL,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_document_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. documents — dokumen legal yang dapat diunduh
--     FK: document_category_id → document_categories
CREATE TABLE `documents` (
  `id`                    BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `document_category_id`  BIGINT UNSIGNED NULL,
  `title`                 VARCHAR(200)  NOT NULL,
  `file_path`             VARCHAR(255)  NOT NULL,
  `file_size_kb`          INT UNSIGNED  NULL,
  `mime_type`             VARCHAR(100)  NULL,
  `year`                  YEAR          NULL,
  `download_count`        INT UNSIGNED  NOT NULL DEFAULT 0,
  `is_active`             TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`            INT           NOT NULL DEFAULT 0,
  `created_at`            TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`            TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_documents_category` (`document_category_id`),
  CONSTRAINT `fk_documents_category` FOREIGN KEY (`document_category_id`) REFERENCES `document_categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  F. KARIR & KONFIGURASI
-- =====================================================================

-- 14. careers — lowongan pekerjaan
CREATE TABLE `careers` (
  `id`              BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `division`        ENUM('it','interior','me','umum') NOT NULL,
  `title`           VARCHAR(150)  NOT NULL,
  `slug`            VARCHAR(170)  NOT NULL,
  `description`     TEXT          NULL,
  `requirements`    TEXT          NULL,
  `employment_type` ENUM('full_time','part_time','contract','internship') NOT NULL DEFAULT 'full_time',
  `location`        VARCHAR(150)  NULL,
  `deadline`        DATE          NULL,
  `is_active`       TINYINT(1)    NOT NULL DEFAULT 1,
  `created_at`      TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`      TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_careers_slug` (`slug`),
  KEY `ix_careers_division` (`division`),
  KEY `ix_careers_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 15. settings — konfigurasi global (key-value)
CREATE TABLE `settings` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `key`         VARCHAR(100)  NOT NULL,
  `value`       LONGTEXT      NULL,
  `type`        ENUM('text','number','boolean','json','image') NOT NULL DEFAULT 'text',
  `group`       VARCHAR(50)   NOT NULL DEFAULT 'general',
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_settings_key` (`key`),
  KEY `ix_settings_group` (`group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
--  G. CHATBOT AI (Hybrid: FAQ → Gemini)
-- =====================================================================

-- 16. faqs — basis pengetahuan lapis 1 (jawaban instan, dikelola admin)
CREATE TABLE `faqs` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `question`    VARCHAR(255)  NOT NULL,
  `answer`      TEXT          NOT NULL,
  `keywords`    VARCHAR(255)  NULL,
  `is_active`   TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`  INT           NOT NULL DEFAULT 0,
  `hit_count`   INT UNSIGNED  NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`  TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_faqs_active` (`is_active`),
  FULLTEXT KEY `ft_faqs_question_keywords` (`question`,`keywords`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 17. chat_conversations — sesi percakapan (1 sesi pengunjung = 1 baris)
CREATE TABLE `chat_conversations` (
  `id`                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `session_id`        VARCHAR(64)   NOT NULL,
  `visitor_ip`        VARCHAR(45)   NULL,
  `user_agent`        VARCHAR(255)  NULL,
  `started_at`        TIMESTAMP     NULL DEFAULT NULL,
  `last_activity_at`  TIMESTAMP     NULL DEFAULT NULL,
  `created_at`        TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`        TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_chat_conversations_session` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 18. chat_logs — pesan dalam percakapan
--     FK: chat_conversation_id → chat_conversations | faq_id → faqs
--     source = lapis penjawab: faq (lapis 1) | gemini (lapis 2)
CREATE TABLE `chat_logs` (
  `id`                    BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `chat_conversation_id`  BIGINT UNSIGNED NOT NULL,
  `faq_id`                BIGINT UNSIGNED NULL,
  `user_message`          TEXT          NOT NULL,
  `bot_reply`             TEXT          NULL,
  `source`                ENUM('faq','gemini') NOT NULL,
  `response_time_ms`      INT UNSIGNED  NULL,
  `created_at`            TIMESTAMP     NULL DEFAULT NULL,
  `updated_at`            TIMESTAMP     NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_chat_logs_conversation` (`chat_conversation_id`),
  KEY `ix_chat_logs_faq` (`faq_id`),
  KEY `ix_chat_logs_source` (`source`),
  CONSTRAINT `fk_chat_logs_conversation` FOREIGN KEY (`chat_conversation_id`) REFERENCES `chat_conversations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_chat_logs_faq`          FOREIGN KEY (`faq_id`)               REFERENCES `faqs`               (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- =====================================================================
--  RINGKASAN RELASI (18 tabel)
--  clients              1—N projects            (client_id)
--  services             1—N projects            (service_id)
--  projects             1—N project_images      (project_id)        [CASCADE]
--  galleries            1—N gallery_photos       (gallery_id)        [CASCADE]
--  post_categories      1—N posts                (post_category_id)
--  users                1—N posts                (user_id, penulis)
--  posts                N—N tags  via post_tag   (post_id, tag_id)   [CASCADE]
--  document_categories  1—N documents            (document_category_id)
--  chat_conversations   1—N chat_logs            (chat_conversation_id) [CASCADE]
--  faqs                 1—N chat_logs            (faq_id, nullable)
-- =====================================================================
