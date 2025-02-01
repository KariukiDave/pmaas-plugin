<?php
/*
Plugin Name: PMaaS Assessment Tool
Plugin URI: https://creativebits.us/pmaas-plugin
Description: Embeds React-based Project Management Assessment Tool
Version: 1.0.2
Author: David Kariuki
Author URI: https://creativebits.us
*/

// Prevent direct file access
if (!defined('ABSPATH')) exit;

class PmaaSAssessmentPlugin {
    public function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_shortcode('pmaas_assessment', [$this, 'render_assessment']);
    }

    public function enqueue_scripts() {
        // Enqueue bundled React and our custom script
        wp_enqueue_script(
            'pmaas-assessment', 
            plugin_dir_url(__FILE__) . 'dist/pmaas-assessment-tool.js', 
            [], 
            '1.0', 
            true
        );

        // Enqueue custom CSS
        wp_enqueue_style('pmaas-assessment-style', plugin_dir_url(__FILE__) . 'pmaas-assessment-tool.css', [], '1.0');

        // Localize the script with new data
        $script_data = array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('pmaas_nonce'),
        );
        wp_localize_script('pmaas-assessment', 'pmaasData', $script_data);
    }

    public function render_assessment() {
        return '<div id="pmaas-assessment-container"></div>';
    }
}

// Initialize the plugin
new PmaaSAssessmentPlugin();

// Add AJAX action for email sending
add_action('wp_ajax_send_assessment_email', 'send_assessment_email');
add_action('wp_ajax_nopriv_send_assessment_email', 'send_assessment_email');

function send_assessment_email() {
    check_ajax_referer('pmaas_nonce', 'nonce');

    $email = sanitize_email($_POST['email']);
    $result = json_decode(stripslashes($_POST['result']), true);

    // Prepare email content
    $subject = 'Your PMaaS Assessment Results';
    $message = "
    <h1>PMaaS Assessment Results</h1>
    <p><strong>Recommendation:</strong> {$result['recommendation']}</p>
    <p><strong>Description:</strong> {$result['description']}</p>
    <p><strong>Recommended Approach:</strong> {$result['type']}</p>
    <p>" . get_approach_description($result['type']) . "</p>
    ";

    // Send email
    $headers = ['Content-Type: text/html; charset=UTF-8'];
    $sent = wp_mail($email, $subject, $message, $headers);

    if ($sent) {
        wp_send_json_success('Email sent successfully');
    } else {
        wp_send_json_error('Failed to send email');
    }

    wp_die();
}

function get_approach_description($type) {
    switch ($type) {
        case 'PMaaS':
            return 'Best for organizations needing flexible, immediate project management support.';
        case 'Hybrid':
            return 'Balances internal capabilities with external project management expertise.';
        case 'Internal Team':
            return 'Ideal for organizations with robust internal project management infrastructure.';
        default:
            return '';
    }
}

