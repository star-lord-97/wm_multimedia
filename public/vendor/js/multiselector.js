jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};
function MultiSelector(target, file_input, opts)
{
    var that = this;
    var inner_files = [];
    var accept = opts.ext_allowed ? '.' + opts.ext_allowed.split(/\|/).join(',.') : null;
    if(accept) $(file_input).attr('accept', accept);

    this.addFile = function(file) {
       var table = $('<div class="col-md-6">');
       var row = $('<div class="content xrow">');
       var icon = $('<div class="icon"><i class="fa fa-file"></i></div>');
       var name = $('<div class="name">');
       var xfname = $('<h4></h4>');
       var xfsize = $('<span class="size"></span>');
       var descr = $('<input type="text" class="fdescr" maxlength="48" name="file_descr">');
       var is_public = $('<input type="checkbox" value="1" name="file_public">');
       var is_public_label = $('<label class="xdescr">عام</label>');
       var del = $('<a href="#" class="del"><i class="fa fa-close"></i></a>');


       $(xfsize).html('(' + convertSize(file.size) + ')');
       // $('<span class="fname">').html().outerHTML()
       $(xfname).html(file.name + xfsize.outerHTML());
       var idx = inner_files.length;
       var id = 'pub_file_' + idx.toString();
       $(is_public).attr('id', id);
       $(is_public_label).attr('for', id)

       if(opts.file_public_default == 1) $(is_public).attr('checked', 'true');

       $(del).click(function()
       {
           $(table).remove();
           inner_files[idx] = undefined;
           if($.grep(inner_files, function(e) { return e != undefined }).length == 0)
           {
               $(file_input).parent().css('display', '');
               $('#file_0').get(0).value = ""; // Prevent from being passed to FileUploader
               $('#upload_controls').remove();
               $('#advanced').hide();
           }
       });

       if(opts.max_upload_files > 0 && $(target).find('.xrow').length >= opts.max_upload_files)
       {
           alert("No remaining slots");
           return false;
       }

       if(checkExt(file) && checkSize(file))
       {

              $(name).append(xfname,descr,is_public_label,is_public);
              $(row).append(icon, name, del);
              $(table).append(row);
              $(target).append(table);
              inner_files.push(file);

          $(file_input).parent().css('display', 'none');
          $(target).css('display', '');

          return true;
       }

       return false;
    };

    var addFileCallback = function(event)
    {
        $(this.files).each(function(i, file)
        {
            that.addFile(file);
        });
    };

    var installUploadControls = function()
    {
        if($('#upload_controls').length){ return; }

        var bottom = $('<div id="upload_controls">');
        var start_upload = $('<button type="button" class="btn btn-upload btn-start pull-right" name="upload" value="Start upload">بدأ الرفع</button>');
        var add_more = $('<label for="add_more" class="btn btn-upload btn-add pull-left">إضافة ملفات</label>');
        var add_more_finput = $('<input id="add_more" type="file">');






        var show_advanced_container = $('<div id="show_advanced" style="width: 485px;"></div>');
        var show_advanced = $('<a href="#">Show advanced</a>');
        //show_advanced_container.append(show_advanced);
        $('#advanced').show();
        $(show_advanced).click(function() {
            $('#advanced_opts').show();
            $(this).hide();
        });

        bottom.append(start_upload);
        bottom.append(add_more_finput);
        bottom.append(add_more);

        setTimeout(function()
        {
            $(add_more_finput).css('left', $(add_more).position().left);
            $(add_more_finput).css('position', 'absolute');
            $(add_more_finput).css('opacity', 0);
        }, 0);

        $(start_upload).click(function(e)
        {
           var files = $.grep(inner_files, function(e) { return e != undefined });
           if(opts.oncomplete) opts.oncomplete(files);
           $('#advanced').hide();
           $('#advanced_opts').hide();
           e.preventDefault();
        });

        $(add_more_finput).change(addFileCallback);
        if(accept) $(add_more_finput).attr('accept', accept);
        //$(target).parent().append(show_advanced_container);
        $(target).parent().append(bottom);
    };

    this.installUploadControls = installUploadControls;

    var checkExt = function(file)
    {
        if(file.name=="")return true;
        var re1 = new RegExp("^.+\.("+opts.ext_allowed+")$","i");
        var re2 = new RegExp("^.+\.("+opts.ext_not_allowed+")$","i");
        if( (opts.ext_allowed && !re1.test(file.name)) || (opts.ext_not_allowed && re2.test(file.name)) )
        {
            str='';
            if(opts.ext_allowed)str+="\nOnly these extensions are allowed: "+opts.ext_allowed.replace(/\|/g,',');
            if(opts.ext_not_allowed)str+="\nThese extensions are not allowed:"+opts.ext_not_allowed.replace(/\|/g,',');
            alert("Extension not allowed for file: \"" + file.name + '"'+str);
            return false;
        }

        return true;
    }

    var checkSize = function(obj)
    {
        if(obj.name=='')return true;
        if(!opts.max_upload_filesize || opts.max_upload_filesize==0) return true;
        if(obj.size>0 && obj.size>opts.max_upload_filesize*1024*1024)
        {
            alert("File size limit is "+opts.max_upload_filesize+" Mbytes");
            return false;
        }
        return true;
    }

    $(file_input).change(addFileCallback);
    $(file_input).change(installUploadControls);
}

function convertSize(size)
{
    if (size > 1024*1024*1024) {
            size = Math.round(size/(1024*1024*1024)*10)/10 + " Gb";
    } else if (size > 1024*1024) {
            size = Math.round(size/(1024*1024)*10)/10+'';
            if(!size.match(/\./))size+='.0';
            size+=' Mb';
    } else if(size > 1024) {
            size = Math.round(size/1024*10)/10 + " Kb";
    } else {
            size = size + " Bytes";
    }
    return size;
}
