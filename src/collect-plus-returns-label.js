function CollectPlusReturnsLabel(container, guid) {
    "use strict";
    var _container = container;
    var _guid = guid;

    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return string ? String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        }) : '';
    }

    function pad(num, size) {
        var s = "0000000" + num;
        return s.substr(s.length - size);
    }

    function mattr(name) {
        return _container.getAttribute(name) || console.error('collect+ attribute missing [' + name + ']') || name.substr(5);
    }

    function oattr(name, def) {
        return _container.getAttribute(name) || def || '';
    }

    function today() {
        var date= new Date();
        return pad(date.getDate(), 2) + '/' + pad(date.getMonth() + 1, 2) + '/' + date.getFullYear();
    }

    function make() {
        var sequences = mattr('data-sequence').split(',');
        var html = '<style>##css##</style>';
        html += '<script>function printPage() { print(); }</script>';
        for (var i = 0; i < sequences.length; ++i) {
            var barcode = '8' + mattr('data-tac') + pad(sequences[i], 8) + 'A0' + mattr('data-depot-number');
            var label = '<table class="cp_table"><tr><td class="cp_header" colspan="2"><img width="189" height="75" title="" alt="" src="data:image/png;base64,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" />';
            label += escapeHtml(mattr('data-client-name'));
            label += '</td></tr><tr><td class="cp_details_container"><div class="cp_cell"><label>Depot</label>';
            label += escapeHtml(mattr('data-depot-number') + ' ' + mattr('data-depot-short'));
            label += '</div><div class="cp_cell"><label>Service</label>';
            label += escapeHtml(mattr('data-service'));
            label += '</div><div class="cp_cell"><label>Label Date</label>';
            label += escapeHtml(oattr('data-label-date', today()));
            label += '</div><div class="cp_cell"><label>Returns Reference</label>';
            label += escapeHtml(oattr('data-returns-reference', 'N/A'));
            label += '</div></td><td class="cp_address"><label>&nbsp;</label>';
            label += '<div>' + escapeHtml(mattr('data-center-name')) + '</div>';
            label += '<div>' + escapeHtml(mattr('data-address-1')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-2')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-3')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-4')) + '</div>';
            label += '<div class="cp_postcode">';
            label += escapeHtml(mattr('data-address-postcode'));
            label += '</div></td></tr><tr class="cp_center"><td colspan="2"><label>Storekeeper Instruction</label>GIVE TO THE DRIVER</td></tr><tr class="cp_center"><td colspan="2"><div>';
            label += '<img class="cp_barcode" id="' + _guid + '-' + i +'"/>';
            label += '</div>';
            label += escapeHtml(barcode).replace(/0/g, '&Oslash;');
            label += '</td></tr></table>';
            html += label;
        }

        var ifrm = document.createElement("IFRAME");
        ifrm.setAttribute('id', 'cp_' + _guid);
        ifrm.style.width = 0;
        ifrm.style.height = 0;
        ifrm.style.borderWidth = 0;
        ifrm.style.position = 'absolute';
        ifrm.style.top = '-100px';
        document.body.appendChild(ifrm);

        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
        ifrm.document.open();
        ifrm.document.write(html);
        ifrm.document.close();

        var style = document.createElement('STYLE');
        style.media = 'print';
        style.type = "text/css";
        style.innerText = '.cp_print_' + _guid + ' *{display:none} .cp_print_' + _guid + ' #cp_' + _guid + '{display:block !important;width:100%;height:210mm;border-width:0;overflow:hidden;}';
        document.body.appendChild(style);

        for (var i = 0; i < sequences.length; ++i) {
            var barcode = '8' + mattr('data-tac') + pad(sequences[i], 8) + 'A0' + mattr('data-depot-number');
            JsBarcode(ifrm.document.getElementById(_guid + '-' + i), barcode, {width: 2, height: 125});
        }

        _container.addEventListener('click', function() {
            var className = document.body.className;
            document.body.className += ' cp_print_' + _guid;
            ifrm.focus();
            ifrm.printPage();
            document.body.className = className;
            return false;
        });
    }
    make();
}

document.addEventListener("DOMContentLoaded", function() {
    var labels = document.getElementsByClassName('cp_returns_label');
    for(var i= 0; i < labels.length; ++i) {
        CollectPlusReturnsLabel(labels[i], 'label-id-' + i)
    }
});
